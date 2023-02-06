import { WebpackSvgLoader } from "./webpackSvgLoader.types";

export const webpackSvgLoader: WebpackSvgLoader = () => {
    return {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
};
