import { Configuration } from "webpack";

import { WebpackOptions } from "./types/webpackConfigSharedTypes";

export type WebpackConfig = (option: WebpackOptions) => Configuration;
