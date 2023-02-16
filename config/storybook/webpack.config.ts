import path from "path";
import { Configuration } from "webpack";

import { webpackSassLoader } from "../webpack/loaders/sass/webpackSassLoader";
import { webpackResolvers } from "../webpack/resolvers/webpackResolvers";
import { WebpackOptions } from "../webpack/types/webpackConfigSharedTypes";

const options: WebpackOptions = {
    isAnalize: false,
    isDev: true,
    mode: "development",
    port: 6006,
    paths: {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    },
};

export default ({ config }: { config: Configuration }) => {
    config.resolve = webpackResolvers(options);
    config.module?.rules?.push(webpackSassLoader(options));

    return config;
};
