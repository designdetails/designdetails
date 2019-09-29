declare type Args = string | number | Array<string | number>;
export declare function createHook(fetcher: (...args: Args[]) => Promise<any>, options: {
    key: string;
}): (...args: (string | number)[]) => any;
export {};
