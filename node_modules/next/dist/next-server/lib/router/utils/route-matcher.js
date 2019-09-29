"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRouteMatcher(routeRegex) {
    const { re, groups } = routeRegex;
    return (pathname) => {
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const params = {};
        Object.keys(groups).forEach((slugName) => {
            const m = routeMatch[groups[slugName]];
            if (m !== undefined) {
                params[slugName] = decodeURIComponent(m);
            }
        });
        return params;
    };
}
exports.getRouteMatcher = getRouteMatcher;
