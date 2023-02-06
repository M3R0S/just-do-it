import { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { WebpackOptions } from "../types/webpackConfigSharedTypes";

export type WebpackDevServer = (
    options: WebpackOptions
) => DevServerConfiguration;
