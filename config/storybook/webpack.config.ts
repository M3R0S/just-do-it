import path from "path";
import { Configuration, RuleSetRule } from "webpack";

import { webpackSassLoader } from "../webpack/loaders/sass/webpackSassLoader";
import { webpackSvgLoader } from "../webpack/loaders/svg/webpackSvgLoader";
import { webpackResolvers } from "../webpack/resolvers/webpackResolvers";
import { WebpackOptions } from "../webpack/types/webpackConfigSharedTypes";

const options: WebpackOptions = {
    isAnalize: false,
    isDev: true,
    mode: "development",
    port: 6006,
    paths: {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    },
};

export default ({ config }: { config: Configuration }) => {
    config.resolve = webpackResolvers(options);
    config?.module?.rules?.push(webpackSassLoader(options));

    const rules = config?.module?.rules;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    config!.module!.rules = rules?.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }

        return rule;
    });

    config.module?.rules?.push(webpackSvgLoader());

    return config;
};