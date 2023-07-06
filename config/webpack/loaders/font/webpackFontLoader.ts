import { WebpackFontLoader } from "./webpackFontLoader.types";

export const webpackFontLoader: WebpackFontLoader = () => {
    return {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
    };
};
