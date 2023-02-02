import { BuildDevServer } from "./buildDevServer.types";

export const buildDevServer: BuildDevServer = (options) => {
    const { port } = options
    return {
        port,
        historyApiFallback: true
    }
};
