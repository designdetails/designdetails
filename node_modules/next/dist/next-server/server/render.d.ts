/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { DocumentType, AppType, NextPageContext } from '../lib/utils';
import { BuildManifest } from './get-page-files';
import { PageConfig } from 'next/types';
export declare type ManifestItem = {
    id: number | string;
    name: string;
    file: string;
    publicPath: string;
};
declare type ReactLoadableManifest = {
    [moduleId: string]: ManifestItem[];
};
declare type RenderOpts = {
    documentMiddlewareEnabled: boolean;
    ampBindInitData: boolean;
    staticMarkup: boolean;
    buildId: string;
    canonicalBase: string;
    runtimeConfig?: {
        [key: string]: any;
    };
    dangerousAsPath: string;
    assetPrefix?: string;
    hasCssMode: boolean;
    err?: Error | null;
    autoExport?: boolean;
    nextExport?: boolean;
    skeleton?: boolean;
    dev?: boolean;
    ampMode?: any;
    ampPath?: string;
    dataOnly?: boolean;
    inAmpMode?: boolean;
    hybridAmp?: boolean;
    buildManifest: BuildManifest;
    reactLoadableManifest: ReactLoadableManifest;
    pageConfig: PageConfig;
    Component: React.ComponentType;
    Document: DocumentType;
    DocumentMiddleware: (ctx: NextPageContext) => void;
    App: AppType;
    ErrorDebug?: React.ComponentType<{
        error: Error;
    }>;
    ampValidator?: (html: string, pathname: string) => Promise<void>;
    unstable_getStaticProps?: (params: {
        params: any | undefined;
    }) => {
        props: any;
        revalidate: number | false;
    };
};
export declare function renderToHTML(req: IncomingMessage, res: ServerResponse, pathname: string, query: ParsedUrlQuery, renderOpts: RenderOpts): Promise<string | null>;
export {};
