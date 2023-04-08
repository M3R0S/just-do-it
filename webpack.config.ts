import path from "path";
import { Configuration } from "webpack";

import { webpackConfig } from "./config/webpack/webpackConfig";
import {
    WebpackEnv,
    WebpackMode,
    WebpackOptions,
    WebpackPaths,
    WebpackProject,
} from "./config/webpack/types/webpackConfigSharedTypes";

export default (env: WebpackEnv): Configuration => {
    const mode: WebpackMode = env.MODE || "development";
    const port: number = env.PORT || 3000;
    const isDev = mode === "development";
    const isAnalize: boolean = env.ANALYZE || false;
    const apiUrl: string = env.API_URL || "http://localhost:8000";
    const project: WebpackProject = "frontend";

    const paths: WebpackPaths = {
        build: path.resolve(__dirname, "build"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
        locales: path.resolve(__dirname, "public", "locales"),
        buildLocales: path.resolve(__dirname, "build", "locales"),
    };

    const options: WebpackOptions = {
        mode,
        paths,
        isDev,
        port,
        isAnalize,
        apiUrl,
        project,
    };

    return webpackConfig(options);
};
