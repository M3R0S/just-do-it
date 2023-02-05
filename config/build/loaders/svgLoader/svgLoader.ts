import { SvgLoader } from "./svgLoader.types";

export const svgLoader: SvgLoader = () => {
    return {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
};
