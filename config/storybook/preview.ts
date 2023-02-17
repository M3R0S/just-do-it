import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StyleDecorator } from "shared/config/storybook/decorators/StyleDecorator";
import { RouterDecorator } from "shared/config/storybook/decorators/RouterDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
];
