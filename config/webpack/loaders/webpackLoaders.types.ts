import { RuleSetRule } from "webpack";

import { WebpackOptions } from "../types/webpackConfigSharedTypes";

export type WebpackLoaders = (options: WebpackOptions) => RuleSetRule[];
