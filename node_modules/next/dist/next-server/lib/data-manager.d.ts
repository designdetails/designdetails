export declare class DataManager {
    data: Map<string, any>;
    constructor(data?: any);
    getData(): Map<string, any>;
    get(key: string): any;
    set(key: string, value: any): void;
    overwrite(data: any): void;
}
