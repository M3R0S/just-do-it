import { WebpackBabelLoader } from "./webpackBabelLoader.types";

export const webpackBabelLoader: WebpackBabelLoader = () => {
    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
        },
    };
};
