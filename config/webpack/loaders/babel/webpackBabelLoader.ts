import { WebpackBabelLoader } from "./webpackBabelLoader.types";

export const webpackBabelLoader: WebpackBabelLoader = (options) => {
    const { isDev } = options;

    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [isDev && require.resolve("react-refresh/babel")].filter(Boolean),
            },
        },
    };
};
