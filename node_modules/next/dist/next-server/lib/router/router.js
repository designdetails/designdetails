"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const mitt_1 = __importDefault(require("../mitt"));
const utils_1 = require("../utils");
const rewrite_url_for_export_1 = require("./rewrite-url-for-export");
const route_matcher_1 = require("./utils/route-matcher");
const route_regex_1 = require("./utils/route-regex");
const is_dynamic_1 = require("./utils/is-dynamic");
function toRoute(path) {
    return path.replace(/\/$/, '') || '/';
}
class Router {
    constructor(pathname, query, as, { initialProps, pageLoader, App, wrapApp, Component, err, subscription, }) {
        this.onPopState = (e) => {
            if (!e.state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname, query } = this;
                this.changeState('replaceState', utils_1.formatWithValidation({ pathname, query }), utils_1.getURL());
                return;
            }
            // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site
            if (e.state.options && e.state.options.fromExternal) {
                return;
            }
            // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.
            if (this._bps && !this._bps(e.state)) {
                return;
            }
            const { url, as, options } = e.state;
            if (process.env.NODE_ENV !== 'production') {
                if (typeof url === 'undefined' || typeof as === 'undefined') {
                    console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
                }
            }
            this.replace(url, as, options);
        };
        // represents the current component key
        this.route = toRoute(pathname);
        // set up the component cache (by route keys)
        this.components = {};
        // We should not keep the cache, if there's an error
        // Otherwise, this cause issues when when going back and
        // come again to the errored page.
        if (pathname !== '/_error') {
            this.components[this.route] = { Component, props: initialProps, err };
        }
        this.components['/_app'] = { Component: App };
        // Backwards compat for Router.router.events
        // TODO: Should be remove the following major version as it was never documented
        // @ts-ignore backwards compatibility
        this.events = Router.events;
        this.pageLoader = pageLoader;
        this.pathname = pathname;
        this.query = query;
        // if auto prerendered and dynamic route wait to update asPath
        // until after mount to prevent hydration mismatch
        this.asPath =
            // @ts-ignore this is temporarily global (attached to window)
            is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        if (typeof window !== 'undefined') {
            // in order for `e.state` to work on the `onpopstate` event
            // we have to register the initial route upon initialization
            this.changeState('replaceState', utils_1.formatWithValidation({ pathname, query }), as);
            window.addEventListener('popstate', this.onPopState);
            window.addEventListener('unload', () => {
                // Workaround for popstate firing on initial page load when
                // navigating back from an external site
                if (history.state) {
                    const { url, as, options } = history.state;
                    this.changeState('replaceState', url, as, Object.assign({}, options, { fromExternal: true }));
                }
            });
        }
    }
    // @deprecated backwards compatibility even though it's a private method.
    static _rewriteUrlForNextExport(url) {
        return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
    }
    update(route, mod) {
        const Component = mod.default || mod;
        const data = this.components[route];
        if (!data) {
            throw new Error(`Cannot update unavailable route: ${route}`);
        }
        const newData = Object.assign({}, data, { Component });
        this.components[route] = newData;
        // pages/_app.js updated
        if (route === '/_app') {
            this.notify(this.components[this.route]);
            return;
        }
        if (route === this.route) {
            this.notify(newData);
        }
    }
    reload() {
        window.location.reload();
    }
    /**
     * Go back in history
     */
    back() {
        window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */
    push(url, as = url, options = {}) {
        return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */
    replace(url, as = url, options = {}) {
        return this.change('replaceState', url, as, options);
    }
    change(method, _url, _as, options) {
        return new Promise((resolve, reject) => {
            // marking route changes as a navigation start entry
            if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
                performance.mark('routeChange');
            }
            // If url and as provided as an object representation,
            // we'll format them into the string version here.
            const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
            let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
            // Add the ending slash to the paths. So, we can serve the
            // "<page>/index.html" directly for the SSR page.
            if (process.env.__NEXT_EXPORT_TRAILING_SLASH) {
                // @ts-ignore this is temporarily global (attached to window)
                if (__NEXT_DATA__.nextExport) {
                    as = rewrite_url_for_export_1.rewriteUrlForNextExport(as);
                }
            }
            this.abortComponentLoad(as);
            // If the url change is only related to a hash change
            // We should not proceed. We should only change the state.
            // WARNING: `_h` is an internal option for handing Next.js client-side
            // hydration. Your app should _never_ use this property. It may change at
            // any time without notice.
            if (!options._h && this.onlyAHashChange(as)) {
                this.asPath = as;
                Router.events.emit('hashChangeStart', as);
                this.changeState(method, url, as);
                this.scrollToHash(as);
                Router.events.emit('hashChangeComplete', as);
                return resolve(true);
            }
            const { pathname, query, protocol } = url_1.parse(url, true);
            if (!pathname || protocol) {
                if (process.env.NODE_ENV !== 'production') {
                    throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
                }
                return resolve(false);
            }
            // If asked to change the current URL we should reload the current page
            // (not location.reload() but reload getInitialProps and other Next.js stuffs)
            // We also need to set the method = replaceState always
            // as this should not go into the history (That's how browsers work)
            // We should compare the new asPath to the current asPath, not the url
            if (!this.urlIsNew(as)) {
                method = 'replaceState';
            }
            // @ts-ignore pathname is always a string
            const route = toRoute(pathname);
            const { shallow = false } = options;
            if (is_dynamic_1.isDynamicRoute(route)) {
                const { pathname: asPathname } = url_1.parse(as);
                const rr = route_regex_1.getRouteRegex(route);
                const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);
                if (!routeMatch) {
                    console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
                    return resolve(false);
                }
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query, routeMatch);
            }
            Router.events.emit('routeChangeStart', as);
            // If shallow is true and the route exists in the router cache we reuse the previous result
            // @ts-ignore pathname is always a string
            this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
                const { error } = routeInfo;
                if (error && error.cancelled) {
                    return resolve(false);
                }
                Router.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, as, options);
                const hash = window.location.hash.substring(1);
                if (process.env.NODE_ENV !== 'production') {
                    const appComp = this.components['/_app'].Component;
                    window.next.isPrerendered =
                        appComp.getInitialProps === appComp.origGetInitialProps &&
                            !routeInfo.Component.getInitialProps;
                }
                // @ts-ignore pathname is always defined
                this.set(route, pathname, query, as, Object.assign({}, routeInfo, { hash }));
                if (error) {
                    Router.events.emit('routeChangeError', error, as);
                    throw error;
                }
                Router.events.emit('routeChangeComplete', as);
                return resolve(true);
            }, reject);
        });
    }
    changeState(method, url, as, options = {}) {
        if (process.env.NODE_ENV !== 'production') {
            if (typeof window.history === 'undefined') {
                console.error(`Warning: window.history is not available.`);
                return;
            }
            // @ts-ignore method should always exist on history
            if (typeof window.history[method] === 'undefined') {
                console.error(`Warning: window.history.${method} is not available`);
                return;
            }
        }
        if (method !== 'pushState' || utils_1.getURL() !== as) {
            // @ts-ignore method should always exist on history
            window.history[method]({ url, as, options }, null, as);
        }
    }
    getRouteInfo(route, pathname, query, as, shallow = false) {
        const cachedRouteInfo = this.components[route];
        // If there is a shallow route transition possible
        // If the route is already rendered on the screen.
        if (shallow && cachedRouteInfo && this.route === route) {
            return Promise.resolve(cachedRouteInfo);
        }
        return new Promise((resolve, reject) => {
            if (cachedRouteInfo) {
                return resolve(cachedRouteInfo);
            }
            this.fetchComponent(route).then(Component => resolve({ Component }), reject);
        })
            .then((routeInfo) => {
            const { Component } = routeInfo;
            if (process.env.NODE_ENV !== 'production') {
                const { isValidElementType } = require('react-is');
                if (!isValidElementType(Component)) {
                    throw new Error(`The default export is not a React Component in page: "${pathname}"`);
                }
            }
            return new Promise((resolve, reject) => {
                // we provide AppTree later so this needs to be `any`
                this.getInitialProps(Component, {
                    pathname,
                    query,
                    asPath: as,
                }).then(props => {
                    routeInfo.props = props;
                    this.components[route] = routeInfo;
                    resolve(routeInfo);
                }, reject);
            });
        })
            .catch(err => {
            return new Promise(resolve => {
                if (err.code === 'PAGE_LOAD_ERROR') {
                    // If we can't load the page it could be one of following reasons
                    //  1. Page doesn't exists
                    //  2. Page does exist in a different zone
                    //  3. Internal error while loading the page
                    // So, doing a hard reload is the proper way to deal with this.
                    window.location.href = as;
                    // Changing the URL doesn't block executing the current code path.
                    // So, we need to mark it as a cancelled error and stop the routing logic.
                    err.cancelled = true;
                    // @ts-ignore TODO: fix the control flow here
                    return resolve({ error: err });
                }
                if (err.cancelled) {
                    // @ts-ignore TODO: fix the control flow here
                    return resolve({ error: err });
                }
                resolve(this.fetchComponent('/_error').then(Component => {
                    const routeInfo = { Component, err };
                    return new Promise(resolve => {
                        this.getInitialProps(Component, {
                            err,
                            pathname,
                            query,
                        }).then(props => {
                            routeInfo.props = props;
                            routeInfo.error = err;
                            resolve(routeInfo);
                        }, gipErr => {
                            console.error('Error in error page `getInitialProps`: ', gipErr);
                            routeInfo.error = err;
                            routeInfo.props = {};
                            resolve(routeInfo);
                        });
                    });
                }));
            });
        });
    }
    set(route, pathname, query, as, data) {
        this.route = route;
        this.pathname = pathname;
        this.query = query;
        this.asPath = as;
        this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */
    beforePopState(cb) {
        this._bps = cb;
    }
    onlyAHashChange(as) {
        if (!this.asPath)
            return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split('#');
        const [newUrlNoHash, newHash] = as.split('#');
        // Makes sure we scroll to the provided hash if the url/hash are the same
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
            return true;
        }
        // If the urls are change, there's more than a hash change
        if (oldUrlNoHash !== newUrlNoHash) {
            return false;
        }
        // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.
        return oldHash !== newHash;
    }
    scrollToHash(as) {
        const [, hash] = as.split('#');
        // Scroll to top if the hash is just `#` with no value
        if (hash === '') {
            window.scrollTo(0, 0);
            return;
        }
        // First we check if the element by id is found
        const idEl = document.getElementById(hash);
        if (idEl) {
            idEl.scrollIntoView();
            return;
        }
        // If there's no element with the id, we check the `name` property
        // To mirror browsers
        const nameEl = document.getElementsByName(hash)[0];
        if (nameEl) {
            nameEl.scrollIntoView();
        }
    }
    urlIsNew(asPath) {
        return this.asPath !== asPath;
    }
    /**
     * Prefetch `page` code, you may wait for the data during `page` rendering.
     * This feature only works in production!
     * @param url of prefetched `page`
     */
    prefetch(url) {
        return new Promise((resolve, reject) => {
            const { pathname, protocol } = url_1.parse(url);
            if (!pathname || protocol) {
                if (process.env.NODE_ENV !== 'production') {
                    throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
                }
                return;
            }
            // Prefetch is not supported in development mode because it would trigger on-demand-entries
            if (process.env.NODE_ENV !== 'production')
                return;
            // @ts-ignore pathname is always defined
            const route = toRoute(pathname);
            this.pageLoader.prefetch(route).then(resolve, reject);
        });
    }
    async fetchComponent(route) {
        let cancelled = false;
        const cancel = (this.clc = () => {
            cancelled = true;
        });
        const Component = await this.pageLoader.loadPage(route);
        if (cancelled) {
            const error = new Error(`Abort fetching component for route: "${route}"`);
            error.cancelled = true;
            throw error;
        }
        if (cancel === this.clc) {
            this.clc = null;
        }
        return Component;
    }
    async getInitialProps(Component, ctx) {
        let cancelled = false;
        const cancel = () => {
            cancelled = true;
        };
        this.clc = cancel;
        const { Component: App } = this.components['/_app'];
        let props;
        if (
        // @ts-ignore workaround for dead-code elimination
        (self.__HAS_SPR || process.env.NODE_ENV !== 'production') &&
            Component.__NEXT_SPR) {
            let status;
            const { pathname } = url_1.parse(ctx.asPath || ctx.pathname);
            props = await fetch(`/_next/data${pathname}.json`)
                .then(res => {
                if (!res.ok) {
                    status = res.status;
                    throw new Error('failed to load prerender data');
                }
                return res.json();
            })
                .catch((err) => {
                console.error(`Failed to load data`, status, err);
                window.location.href = pathname;
                return new Promise(() => { });
            });
        }
        else {
            const AppTree = this._wrapApp(App);
            ctx.AppTree = AppTree;
            props = await utils_1.loadGetInitialProps(App, {
                AppTree,
                Component,
                router: this,
                ctx,
            });
        }
        if (cancel === this.clc) {
            this.clc = null;
        }
        if (cancelled) {
            const err = new Error('Loading initial props cancelled');
            err.cancelled = true;
            throw err;
        }
        return props;
    }
    abortComponentLoad(as) {
        if (this.clc) {
            const e = new Error('Route Cancelled');
            e.cancelled = true;
            Router.events.emit('routeChangeError', e, as);
            this.clc();
            this.clc = null;
        }
    }
    notify(data) {
        this.sub(data, this.components['/_app'].Component);
    }
}
Router.events = mitt_1.default();
exports.default = Router;
