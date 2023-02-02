import { TypescriptLoader } from "./typescriptLoader.types";

export const typescriptLoader: TypescriptLoader = () => {
    return {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
};
