import { ThemeDecorator } from "../../src/shared/config/storybook/decorators/ThemeDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/decorators/StyleDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/decorators/RouterDecorator";
import { Theme } from "../../src/shared/lib/context/ThemeContext";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator];
