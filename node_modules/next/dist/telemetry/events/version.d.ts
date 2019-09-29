declare type EventCliSessionStarted = {
    nextVersion: string;
    nodeVersion: string;
    cliCommand: string;
};
export declare function recordVersion(event: Omit<EventCliSessionStarted, 'nextVersion' | 'nodeVersion'>): Promise<void> | Promise<{
    isFulfilled: boolean;
    isRejected: boolean;
    value?: any;
    reason?: any;
}>;
export {};
