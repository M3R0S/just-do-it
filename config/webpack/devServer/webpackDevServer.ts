import { WebpackDevServer } from "./webpackDevServer.types";

export const webpackDevServer: WebpackDevServer = (options) => {
    const { port } = options;

    return {
        port,
        historyApiFallback: true,
        hot: true,
    };
};
