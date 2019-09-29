"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRouteRegex(normalizedRoute) {
    // Escape all characters that could be considered RegEx
    const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
    const groups = {};
    let groupIndex = 1;
    const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => ((groups[$1
        // Un-escape key
        .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++),
        '/([^/]+?)'));
    return {
        re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
        groups,
    };
}
exports.getRouteRegex = getRouteRegex;
