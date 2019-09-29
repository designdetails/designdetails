export declare function getRouteRegex(normalizedRoute: string): {
    re: RegExp;
    groups: {
        [groupName: string]: number;
    };
};
