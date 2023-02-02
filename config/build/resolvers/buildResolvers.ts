import { BuildResolvers } from "./buildResolvers.types";

export const buildResolvers: BuildResolvers = (options) => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
    };
};
