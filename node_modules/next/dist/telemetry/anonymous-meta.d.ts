/// <reference types="node" />
declare type AnonymousMeta = {
    systemPlatform: NodeJS.Platform;
    systemRelease: string;
    systemArchitecture: string;
    cpuCount: number;
    cpuModel: string | null;
    cpuSpeed: number | null;
    memoryInMb: number;
    isDocker: boolean;
    isNowDev: boolean;
    isCI: boolean;
    ciName: string | null;
};
export declare function getAnonymousMeta(): AnonymousMeta;
export {};
