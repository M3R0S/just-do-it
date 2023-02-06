import { ResolveOptions } from "webpack";

import { WebpackOptions } from "../types/webpackConfigSharedTypes";

export type WebpackResolvers = (options: WebpackOptions) => ResolveOptions;
