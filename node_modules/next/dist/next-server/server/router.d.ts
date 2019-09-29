/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { UrlWithParsedQuery } from 'url';
export declare const route: (path: string) => (pathname: string | undefined, params?: any) => any;
export declare type Params = {
    [param: string]: any;
};
export declare type RouteMatch = (pathname: string | undefined) => false | Params;
export declare type Route = {
    match: RouteMatch;
    fn: (req: IncomingMessage, res: ServerResponse, params: Params, parsedUrl: UrlWithParsedQuery) => void;
};
export default class Router {
    routes: Route[];
    constructor(routes?: Route[]);
    add(route: Route): void;
    match(req: IncomingMessage, res: ServerResponse, parsedUrl: UrlWithParsedQuery): (() => void) | undefined;
}
