"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const raw_body_1 = __importDefault(require("raw-body"));
const content_type_1 = require("content-type");
const load_components_1 = require("./load-components");
async function apiResolver(req, res, params, resolverModule) {
    try {
        let config = {};
        let bodyParser = true;
        if (!resolverModule) {
            res.statusCode = 404;
            res.end('Not Found');
            return;
        }
        if (resolverModule.config) {
            config = resolverModule.config;
            if (config.api && config.api.bodyParser === false) {
                bodyParser = false;
            }
        }
        // Parsing of cookies
        setLazyProp({ req }, 'cookies', getCookieParser(req));
        // Parsing query string
        setLazyProp({ req, params }, 'query', getQueryParser(req));
        // // Parsing of body
        if (bodyParser) {
            req.body = await parseBody(req, config.api && config.api.bodyParser && config.api.bodyParser.sizeLimit
                ? config.api.bodyParser.sizeLimit
                : '1mb');
        }
        res.status = statusCode => sendStatusCode(res, statusCode);
        res.send = data => sendData(res, data);
        res.json = data => sendJson(res, data);
        const resolver = load_components_1.interopDefault(resolverModule);
        resolver(req, res);
    }
    catch (e) {
        if (e instanceof ApiError) {
            sendError(res, e.statusCode, e.message);
        }
        else {
            console.error(e);
            sendError(res, 500, 'Internal Server Error');
        }
    }
}
exports.apiResolver = apiResolver;
/**
 * Parse incoming message like `json` or `urlencoded`
 * @param req request object
 */
async function parseBody(req, limit) {
    const contentType = content_type_1.parse(req.headers['content-type'] || 'text/plain');
    const { type, parameters } = contentType;
    const encoding = parameters.charset || 'utf-8';
    let buffer;
    try {
        buffer = await raw_body_1.default(req, { encoding, limit });
    }
    catch (e) {
        if (e.type === 'entity.too.large') {
            throw new ApiError(413, `Body exceeded ${limit} limit`);
        }
        else {
            throw new ApiError(400, 'Invalid body');
        }
    }
    const body = buffer.toString();
    if (type === 'application/json' || type === 'application/ld+json') {
        return parseJson(body);
    }
    else if (type === 'application/x-www-form-urlencoded') {
        const qs = require('querystring');
        return qs.decode(body);
    }
    else {
        return body;
    }
}
exports.parseBody = parseBody;
/**
 * Parse `JSON` and handles invalid `JSON` strings
 * @param str `JSON` string
 */
function parseJson(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        throw new ApiError(400, 'Invalid JSON');
    }
}
/**
 * Parsing query arguments from request `url` string
 * @param url of request
 * @returns Object with key name of query argument and its value
 */
function getQueryParser({ url }) {
    return function parseQuery() {
        const { URL } = require('url');
        // we provide a placeholder base url because we only want searchParams
        const params = new URL(url, 'https://n').searchParams;
        const query = {};
        for (const [key, value] of params) {
            query[key] = value;
        }
        return query;
    };
}
exports.getQueryParser = getQueryParser;
/**
 * Parse cookeies from `req` header
 * @param req request object
 */
function getCookieParser(req) {
    return function parseCookie() {
        const header = req.headers.cookie;
        if (!header) {
            return {};
        }
        const { parse } = require('cookie');
        return parse(Array.isArray(header) ? header.join(';') : header);
    };
}
exports.getCookieParser = getCookieParser;
/**
 *
 * @param res response object
 * @param statusCode `HTTP` status code of response
 */
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
exports.sendStatusCode = sendStatusCode;
/**
 * Send `any` body to response
 * @param res response object
 * @param body of response
 */
function sendData(res, body) {
    if (body === null) {
        res.end();
        return;
    }
    const contentType = res.getHeader('Content-Type');
    if (Buffer.isBuffer(body)) {
        if (!contentType) {
            res.setHeader('Content-Type', 'application/octet-stream');
        }
        res.setHeader('Content-Length', body.length);
        res.end(body);
        return;
    }
    if (body instanceof stream_1.Stream) {
        if (!contentType) {
            res.setHeader('Content-Type', 'application/octet-stream');
        }
        body.pipe(res);
        return;
    }
    let str = body;
    // Stringify JSON body
    if (typeof body === 'object' || typeof body === 'number') {
        str = JSON.stringify(body);
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
    }
    res.setHeader('Content-Length', Buffer.byteLength(str));
    res.end(str);
}
exports.sendData = sendData;
/**
 * Send `JSON` object
 * @param res response object
 * @param jsonBody of data
 */
function sendJson(res, jsonBody) {
    // Set header to application/json
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    // Use send to handle request
    res.send(jsonBody);
}
exports.sendJson = sendJson;
/**
 * Custom error class
 */
class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.ApiError = ApiError;
/**
 * Sends error in `response`
 * @param res response object
 * @param statusCode of response
 * @param message of response
 */
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
exports.sendError = sendError;
/**
 * Execute getter function only if its needed
 * @param LazyProps `req` and `params` for lazyProp
 * @param prop name of property
 * @param getter function to get data
 */
function setLazyProp({ req, params }, prop, getter) {
    const opts = { configurable: true, enumerable: true };
    const optsReset = Object.assign({}, opts, { writable: true });
    Object.defineProperty(req, prop, Object.assign({}, opts, { get: () => {
            let value = getter();
            if (params && typeof params !== 'boolean') {
                value = Object.assign({}, value, params);
            }
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, Object.assign({}, optsReset, { value }));
            return value;
        }, set: value => {
            Object.defineProperty(req, prop, Object.assign({}, optsReset, { value }));
        } }));
}
exports.setLazyProp = setLazyProp;
