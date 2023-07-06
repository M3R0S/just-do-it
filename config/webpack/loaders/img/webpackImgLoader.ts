import { WebpackImgLoader } from "./webpackImgLoader.types";

export const webpackImgLoader: WebpackImgLoader = () => {
    return {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
    };
};
