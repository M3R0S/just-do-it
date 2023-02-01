import { ResolveOptions } from "webpack";

import { BuildOptions } from "../types";

export type BuildResolvers = (options: BuildOptions) => ResolveOptions