import { AssetsLoader } from "./assetsLoader.types";

export const assetsLoader: AssetsLoader = () => {
    return {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
    };
};
