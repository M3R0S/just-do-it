import { BuildResolvers } from ".";

export const buildResolvers: BuildResolvers = (options) => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
    };
};
