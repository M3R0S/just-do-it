import { WebpackLoaders } from "./webpackLoaders.types";
import { webpackImgLoader } from "./img/webpackImgLoader";
import { webpackSassLoader } from "./sass/webpackSassLoader";
import { webpackSvgLoader } from "./svg/webpackSvgLoader";
import { webpackTypescriptLoader } from "./typescript/webpackTypescriptLoader";
import { webpackBabelLoader } from "./babel/webpackBabelLoader";
import { webpackFontLoader } from "./font/webpackFontLoader";

export const webpackLoaders: WebpackLoaders = (options) => {
    return [
        webpackBabelLoader(options),
        webpackTypescriptLoader(),
        webpackFontLoader(),
        webpackSassLoader(options),
        webpackSvgLoader(),
        webpackImgLoader(),
    ];
};
