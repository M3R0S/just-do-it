import path from "path";
import { Configuration, DefinePlugin } from "webpack";

import { webpackSassLoader } from "../webpack/loaders/sass/webpackSassLoader";
import { webpackSvgLoader } from "../webpack/loaders/svg/webpackSvgLoader";
import { webpackResolvers } from "../webpack/resolvers/webpackResolvers";
import { WebpackOptions } from "../webpack/types/webpackConfigSharedTypes";

const options: WebpackOptions = {
    isAnalize: false,
    apiUrl: "",
    isDev: true,
    mode: "development",
    port: 6006,
    paths: {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
        locales: "",
        buildLocales: "",
    },
    project: "storybook",
};

export default ({ config }: { config: Configuration }) => {
    config.resolve = webpackResolvers(options);
    config?.module?.rules?.push(webpackSassLoader(options));

    if (config.module?.rules) {
        config.module.rules = config.module?.rules?.map((rule) => {
            if (rule !== "..." && /svg/.test(rule.test as string)) {
                return {
                    ...rule,
                    exclude: /\.svg$/i,
                };
            }

            return rule;
        });
    }

    config.module?.rules?.push(webpackSvgLoader());

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(options.apiUrl),
            __PROJECT__: JSON.stringify(options.project),
        })
    );

    return config;
};
