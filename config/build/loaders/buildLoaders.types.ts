import { RuleSetRule } from "webpack";
import { BuildOptions } from "../types";

export type BuildLoaders = (options: BuildOptions) => RuleSetRule[]