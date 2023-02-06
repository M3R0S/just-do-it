import { WebpackLoaders } from "./webpackLoaders.types";

import { webpackAssetsLoader } from "./assets/webpackAssetsLoader";
import { webpackSassLoader } from "./sass/webpackSassLoader";
import { webpackSvgLoader } from "./svg/webpackSvgLoader";
import { webpackTypescriptLoader } from "./typescript/webpackTypescriptLoader";

export const webpackLoaders: WebpackLoaders = (options) => {
    return [
        webpackTypescriptLoader(),
        webpackSassLoader(options),
        webpackSvgLoader(),
        webpackAssetsLoader(),
    ];
};
