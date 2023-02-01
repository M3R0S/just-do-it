import path from "path";
import { Configuration } from "webpack";

import { buildWebpackConfig } from "./config/build";
import { BuildOptions, BuildMode, BuildPath, BuildEnv } from "./config/build/types";

export default (env: BuildEnv) => {
    const mode: BuildMode = env.mode || "development";
    const PORT: number = env.port || 3000;
    
    const isDev = mode === "development";

    const paths: BuildPath = {
        build: path.resolve(__dirname, "build"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src")
    };

    const options: BuildOptions = {
        mode,
        paths,
        isDev,
        port: PORT,
    };

    const config: Configuration = buildWebpackConfig(options);

    return config
};
