import { BuildDevServer } from ".";

export const buildDevServer: BuildDevServer = (options) => {
    const { port } = options
    return {
        port,
        historyApiFallback: true
    }
};
