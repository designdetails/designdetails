export declare function recordNextPlugins(dir: string): Promise<{
    isFulfilled: boolean;
    isRejected: boolean;
    value?: any;
    reason?: any;
} | undefined>;
