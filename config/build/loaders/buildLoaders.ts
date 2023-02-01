import { BuildLoaders } from ".";
import { sassLoader } from "./sassLoader";
import { typescriptLoader } from "./typescriptLoader";

export const buildLoaders: BuildLoaders = (options) => {
    return [typescriptLoader(), sassLoader(options)];
};
