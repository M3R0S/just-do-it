import { WebpackLoaders } from "./webpackLoaders.types";
import { webpackAssetsLoader } from "./assets/webpackAssetsLoader";
import { webpackSassLoader } from "./sass/webpackSassLoader";
import { webpackSvgLoader } from "./svg/webpackSvgLoader";
import { webpackTypescriptLoader } from "./typescript/webpackTypescriptLoader";
import { webpackBabelLoader } from "./babel/webpackBabelLoader";

export const webpackLoaders: WebpackLoaders = (options) => {
    return [
        webpackBabelLoader(options),
        webpackTypescriptLoader(),
        webpackSassLoader(options),
        webpackSvgLoader(),
        webpackAssetsLoader(),
    ];
};
