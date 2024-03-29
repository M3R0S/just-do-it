import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { WebpackSassLoader } from "./webpackSassLoader.types";

export const webpackSassLoader: WebpackSassLoader = (options) => {
    const { isDev } = options;

    return {
        test: /\.(sc|sa|c)ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName: isDev
                            ? "[name]__[local]--[hash:base64:5]"
                            : "[hash:base64:5]",
                    },
                },
            },
            "resolve-url-loader",
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                },
            },
        ],
    };
};
