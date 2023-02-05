import { assetsLoader } from "./assetsLoader";
import { BuildLoaders } from "./buildLoaders.types";
import { sassLoader } from "./sassLoader";
import { svgLoader } from "./svgLoader";
import { typescriptLoader } from "./typescriptLoader";

export const buildLoaders: BuildLoaders = (options) => {
    return [typescriptLoader(), sassLoader(options), svgLoader(), assetsLoader()];
};
