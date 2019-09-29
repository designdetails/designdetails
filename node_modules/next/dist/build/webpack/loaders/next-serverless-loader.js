"use strict";exports.__esModule=true;exports.default=void 0;var _path=require("path");var _querystring=require("querystring");var _constants=require("../../../next-server/lib/constants");var _utils=require("../../../next-server/lib/router/utils");var _constants2=require("../../../lib/constants");const nextServerlessLoader=function(){const{distDir,absolutePagePath,page,buildId,canonicalBase,assetPrefix,ampBindInitData,absoluteAppPath,absoluteDocumentPath,absoluteErrorPath,generateEtags}=typeof this.query==='string'?(0,_querystring.parse)(this.query.substr(1)):this.query;const buildManifest=(0,_path.join)(distDir,_constants.BUILD_MANIFEST).replace(/\\/g,'/');const reactLoadableManifest=(0,_path.join)(distDir,_constants.REACT_LOADABLE_MANIFEST).replace(/\\/g,'/');if(page.match(_constants2.API_ROUTE)){return`
    ${(0,_utils.isDynamicRoute)(page)?`
      import { getRouteMatcher } from 'next/dist/next-server/lib/router/utils/route-matcher';
      import { getRouteRegex } from 'next/dist/next-server/lib/router/utils/route-regex';
      `:``}
      import { parse } from 'url'
      import { apiResolver } from 'next/dist/next-server/server/api-utils'

      export default (req, res) => {
        const params = ${(0,_utils.isDynamicRoute)(page)?`getRouteMatcher(getRouteRegex('${page}'))(parse(req.url).pathname)`:`{}`}
        const resolver = require('${absolutePagePath}')
        apiResolver(req, res, params, resolver)
      }
    `;}else{return`
    import {parse} from 'url'
    import {renderToHTML} from 'next/dist/next-server/server/render';
    import {sendHTML} from 'next/dist/next-server/server/send-html';
    ${(0,_utils.isDynamicRoute)(page)?`import {getRouteMatcher, getRouteRegex} from 'next/dist/next-server/lib/router/utils';`:''}
    import buildManifest from '${buildManifest}';
    import reactLoadableManifest from '${reactLoadableManifest}';
    import Document from '${absoluteDocumentPath}';
    import Error from '${absoluteErrorPath}';
    import App from '${absoluteAppPath}';
    import * as ComponentInfo from '${absolutePagePath}';
    const Component = ComponentInfo.default
    export default Component
    export const unstable_getStaticProps = ComponentInfo['unstable_getStaticProp' + 's']
    ${(0,_utils.isDynamicRoute)(page)?"export const unstable_getStaticParams = ComponentInfo['unstable_getStaticParam' + 's']":''}
    export const config = ComponentInfo['confi' + 'g'] || {}
    export const _app = App
    export async function renderReqToHTML(req, res, fromExport) {
      const options = {
        App,
        Document,
        buildManifest,
        unstable_getStaticProps,
        reactLoadableManifest,
        canonicalBase: "${canonicalBase}",
        buildId: "${buildId}",
        assetPrefix: "${assetPrefix}",
        ampBindInitData: ${ampBindInitData===true||ampBindInitData==='true'},
      }
      let sprData = false

      if (req.url.match(/_next\\/data/)) {
        sprData = true
        req.url = req.url
          .replace(/\\/_next\\/data\\//, '/')
          .replace(/\\.json$/, '')
      }
      const parsedUrl = parse(req.url, true)
      const renderOpts = Object.assign(
        {
          Component,
          pageConfig: config,
          dataOnly: req.headers && (req.headers.accept || '').indexOf('application/amp.bind+json') !== -1,
          nextExport: fromExport
        },
        options,
      )
      try {
        ${page==='/_error'?`res.statusCode = 404`:''}
        ${(0,_utils.isDynamicRoute)(page)?`const params = fromExport && !unstable_getStaticProps ? {} : getRouteMatcher(getRouteRegex("${page}"))(parsedUrl.pathname) || {};`:`const params = {};`}
        const result = await renderToHTML(req, res, "${page}", Object.assign({}, unstable_getStaticProps ? {} : parsedUrl.query, params, sprData ? { _nextSprData: '1' } : {}), renderOpts)

        if (fromExport) return { html: result, renderOpts }
        return result
      } catch (err) {
        if (err.code === 'ENOENT') {
          res.statusCode = 404
          const result = await renderToHTML(req, res, "/_error", parsedUrl.query, Object.assign({}, options, {
            Component: Error
          }))
          return result
        } else {
          console.error(err)
          res.statusCode = 500
          const result = await renderToHTML(req, res, "/_error", parsedUrl.query, Object.assign({}, options, {
            Component: Error,
            err
          }))
          return result
        }
      }
    }
    export async function render (req, res) {
      try {
        const html = await renderReqToHTML(req, res)
        sendHTML(req, res, html, {generateEtags: ${generateEtags}})
      } catch(err) {
        console.error(err)
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    }
  `;}};var _default=nextServerlessLoader;exports.default=_default;