import { TypescriptLoader } from ".";

export const typescriptLoader: TypescriptLoader = () => {
    return {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
};
