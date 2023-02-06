import { WebpackAssetsLoader } from "./webpackAssetsLoader.types";

export const webpackAssetsLoader: WebpackAssetsLoader = () => {
    return {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
    };
};
