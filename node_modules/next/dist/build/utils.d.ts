import { getPageChunks } from './webpack/plugins/chunk-graph-plugin';
export declare function collectPages(directory: string, pageExtensions: string[]): Promise<string[]>;
export interface PageInfo {
    isAmp?: boolean;
    size: number;
    chunks?: ReturnType<typeof getPageChunks>;
    static?: boolean;
    serverBundle: string;
}
export declare function printTreeView(list: string[], pageInfos: Map<string, PageInfo>, serverless: boolean): void;
export declare function getPageSizeInKb(page: string, distPath: string, buildId: string, buildManifest: {
    pages: {
        [k: string]: string[];
    };
}, isModern: boolean): Promise<number>;
export declare function isPageStatic(page: string, serverBundle: string, runtimeEnvConfig: any): Promise<{
    static?: boolean;
    prerender?: boolean;
    isHybridAmp?: boolean;
    prerenderRoutes?: string[] | undefined;
}>;
export declare function hasCustomAppGetInitialProps(_appBundle: string, runtimeEnvConfig: any): boolean;
