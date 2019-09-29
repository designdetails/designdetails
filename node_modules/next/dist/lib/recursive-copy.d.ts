export declare function recursiveCopy(source: string, dest: string, { concurrency, filter, }?: {
    concurrency?: number;
    filter?(path: string): boolean;
}): Promise<void>;
