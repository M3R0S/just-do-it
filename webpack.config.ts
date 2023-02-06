import path from "path";

import {
    webpackConfig,
    WebpackEnv,
    WebpackMode,
    WebpackOptions,
    WebpackPath,
} from "./config/webpack";

export default (env: WebpackEnv) => {
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
