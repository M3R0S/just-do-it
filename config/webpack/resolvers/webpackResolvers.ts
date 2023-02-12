import { WebpackResolvers } from "./webpackResolvers.types";

export const webpackResolvers: WebpackResolvers = (options) => {
    const { paths } = options;

    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
    };
};
