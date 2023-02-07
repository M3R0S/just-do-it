import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin, ProgressPlugin } from "webpack";

import { WebpackPlugins } from "./webpackPlugins.types";

export const webpackPlugins: WebpackPlugins = (options) => {
    const { paths, isDev } = options;

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];
};
