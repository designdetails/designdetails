import webpack from 'webpack';
declare type CssMinimizerPluginOptions = {
    postcssOptions: {
        map: false | {
            prev?: string | false;
            inline: boolean;
            annotation: boolean;
        };
    };
};
export declare class CssMinimizerPlugin {
    private options;
    constructor(options: CssMinimizerPluginOptions);
    apply(compiler: webpack.Compiler): void;
}
export {};
