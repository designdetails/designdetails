declare type EventBuildCompleted = {
    durationInSeconds: number;
    totalPageCount: number;
};
export declare function recordBuildDuration(event: EventBuildCompleted): Promise<{
    isFulfilled: boolean;
    isRejected: boolean;
    value?: any;
    reason?: any;
}>;
declare type EventBuildOptimized = {
    durationInSeconds: number;
    totalPageCount: number;
    staticPageCount: number;
    ssrPageCount: number;
};
export declare function recordBuildOptimize(event: EventBuildOptimized): Promise<{
    isFulfilled: boolean;
    isRejected: boolean;
    value?: any;
    reason?: any;
}>;
export {};
