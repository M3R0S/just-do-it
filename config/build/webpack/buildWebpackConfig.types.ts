import { Configuration } from "webpack"

import { BuildOptions } from "../types"

export type BuildWebpackConfig = (option: BuildOptions) => Configuration