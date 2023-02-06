import { RuleSetRule } from "webpack";

import { WebpackOptions } from "../../types/webpackConfigSharedTypes";

export type WebpackSassLoader = (options: WebpackOptions) => RuleSetRule;
