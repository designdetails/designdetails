import { Compiler, Plugin } from 'webpack';
export declare function getPageChunks(page: string): {
    external: Set<String>;
    internal: Set<String>;
} | undefined;
export declare class ChunkGraphPlugin implements Plugin {
    private buildId;
    private dir;
    private distDir;
    private isServer;
    constructor(buildId: string, { dir, distDir, isServer, }: {
        dir: string;
        distDir: string;
        isServer: boolean;
    });
    apply(compiler: Compiler): void;
}
