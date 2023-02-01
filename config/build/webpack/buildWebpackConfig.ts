import { BuildWebpackConfig } from ".";
import { buildDevServer } from "../devServer";
import { buildLoaders } from "../loaders";
import { buildPlugins } from "../plugins";
import { buildResolvers } from "../resolvers";

export const buildWebpackConfig: BuildWebpackConfig = (options) => {
    const { mode, paths, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        devtool: isDev ? "inline-source-map" : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devServer: isDev ? buildDevServer(options) : undefined,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        
    };
};
