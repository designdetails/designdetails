"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../lib/constants");
const path_1 = require("path");
const require_1 = require("./require");
function interopDefault(mod) {
    return mod.default || mod;
}
exports.interopDefault = interopDefault;
async function loadComponents(distDir, buildId, pathname, serverless) {
    if (serverless) {
        const Component = await require_1.requirePage(pathname, distDir, serverless);
        return {
            Component,
            pageConfig: Component.config || {},
            unstable_getStaticProps: Component.unstable_getStaticProps,
        };
    }
    const documentPath = path_1.join(distDir, constants_1.SERVER_DIRECTORY, constants_1.CLIENT_STATIC_FILES_PATH, buildId, 'pages', '_document');
    const appPath = path_1.join(distDir, constants_1.SERVER_DIRECTORY, constants_1.CLIENT_STATIC_FILES_PATH, buildId, 'pages', '_app');
    const DocumentMod = require(documentPath);
    const { middleware: DocumentMiddleware } = DocumentMod;
    const ComponentMod = require_1.requirePage(pathname, distDir, serverless);
    const [buildManifest, reactLoadableManifest, Component, Document, App,] = await Promise.all([
        require(path_1.join(distDir, constants_1.BUILD_MANIFEST)),
        require(path_1.join(distDir, constants_1.REACT_LOADABLE_MANIFEST)),
        interopDefault(ComponentMod),
        interopDefault(DocumentMod),
        interopDefault(require(appPath)),
    ]);
    return {
        App,
        Document,
        Component,
        buildManifest,
        DocumentMiddleware,
        reactLoadableManifest,
        pageConfig: ComponentMod.config || {},
        unstable_getStaticProps: ComponentMod.unstable_getStaticProps,
    };
}
exports.loadComponents = loadComponents;
