import { StorybookConfig } from "@storybook/react/types";

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-addon-react-router-v6",
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
};

export default config;
