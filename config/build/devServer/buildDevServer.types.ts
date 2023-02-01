import { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { BuildOptions } from "../types";

export type BuildDevServer = (options: BuildOptions) => DevServerConfiguration;
