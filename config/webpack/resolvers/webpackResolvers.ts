import { WebpackResolvers } from "./webpackResolvers.types";

export const webpackResolvers: WebpackResolvers = (options) => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
    };
};
