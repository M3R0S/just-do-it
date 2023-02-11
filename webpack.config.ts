import path from "path";
import { Configuration } from "webpack";

import { webpackConfig } from "./config/webpack/webpackConfig";
import {
    WebpackEnv,
    WebpackMode,
    WebpackOptions,
    WebpackPath,
} from "./config/webpack/types/webpackConfigSharedTypes";

export default (env: WebpackEnv): Configuration => {
    const mode: WebpackMode = env.MODE || "development";
    const port: number = env.PORT || 3000;
    const isDev = mode === "development";

    const paths: WebpackPath = {
        build: path.resolve(__dirname, "build"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const options: WebpackOptions = {
        mode,
        paths,
        isDev,
        port,
    };

    return webpackConfig(options);
};
