import { RuleSetRule } from "webpack";

import { WebpackOptions } from "../../types/webpackConfigSharedTypes";

export type WebpackBabelLoader = (options: WebpackOptions) => RuleSetRule;
