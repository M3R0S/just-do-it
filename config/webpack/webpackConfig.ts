import { WebpackConfig } from "./webpackConfig.types";

import { webpackDevServer } from "./devServer/webpackDevServer";
import { webpackLoaders } from "./loaders/webpackLoaders";
import { webpackPlugins } from "./plugins/webpackPlugins";
import { webpackResolvers } from "./resolvers/webpackResolvers";

export const webpackConfig: WebpackConfig = (options) => {
    const { mode, paths, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        devtool: isDev ? "inline-source-map" : undefined,
        plugins: webpackPlugins(options),
        module: {
            rules: webpackLoaders(options),
        },
        resolve: webpackResolvers(options),
        devServer: isDev ? webpackDevServer(options) : undefined,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            assetModuleFilename: "assets/[hash][ext][query]",
            clean: true,
        },
    };
};
