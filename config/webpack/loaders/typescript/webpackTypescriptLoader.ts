import { WebpackTypescriptLoader } from "./webpackTypescriptLoader.types";

export const webpackTypescriptLoader: WebpackTypescriptLoader = () => {
    return {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
};
