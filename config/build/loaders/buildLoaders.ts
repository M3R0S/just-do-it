import { BuildLoaders } from "./buildLoaders.types";
import { sassLoader } from "./sassLoader";
import { typescriptLoader } from "./typescriptLoader";

export const buildLoaders: BuildLoaders = (options) => {
    return [typescriptLoader(), sassLoader(options)];
};
