import { WebpackResolvers } from "./webpackResolvers.types";

export const webpackResolvers: WebpackResolvers = (options) => {
    const { paths } = options;

    return {
        preferAbsolute: true,
        modules: [paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    };
};
