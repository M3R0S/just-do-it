import { WebpackPluginInstance } from "webpack";

import { BuildOptions } from "../types"; 

export type BuildPlugins = (options: BuildOptions) => WebpackPluginInstance[]