import { WebpackPluginInstance } from "webpack";

import { WebpackOptions } from "../types/webpackConfigSharedTypes";

export type WebpackPlugins = (options: WebpackOptions) => WebpackPluginInstance[];
