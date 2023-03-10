import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { TextProps, TextTheme } from "./Text.types";
import { Text } from "./Text";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Text",
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light: Story<TextProps> = Template.bind({});
Light.args = {
    children: "Text",
};

export const Dark: Story<TextProps> = Template.bind({});
Dark.args = {
    children: "Text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorLight: Story<TextProps> = Template.bind({});
ErrorLight.args = {
    children: "Text",
    theme: TextTheme.ERROR,
};

export const ErrorDark: Story<TextProps> = Template.bind({});
ErrorDark.args = {
    children: "Text",
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
