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
    isTitle: true,
    children: "Text",
};

export const Dark: Story<TextProps> = Template.bind({});
Dark.args = {
    isTitle: true,
    children: "Text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorLight: Story<TextProps> = Template.bind({});
ErrorLight.args = {
    isTitle: true,
    children: "Text",
    theme: "error",
};

export const ErrorDark: Story<TextProps> = Template.bind({});
ErrorDark.args = {
    isTitle: true,
    children: "Text",
    theme: "error",
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeMLight: Story<TextProps> = Template.bind({});
SizeMLight.args = {
    isTitle: true,
    children: "Text",
    size: "size_m",
};

export const SizeMDark: Story<TextProps> = Template.bind({});
SizeMDark.args = {
    isTitle: true,
    children: "Text",
    size: "size_m",
};
SizeMDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeLLight: Story<TextProps> = Template.bind({});
SizeLLight.args = {
    isTitle: true,
    children: "Text",
    size: "size_l",
};

export const SizeLDark: Story<TextProps> = Template.bind({});
SizeLDark.args = {
    isTitle: true,
    children: "Text",
    size: "size_l",
};
SizeLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeXLLight: Story<TextProps> = Template.bind({});
SizeXLLight.args = {
    isTitle: true,
    children: "Text",
    size: "size_xl",
};

export const SizeXLDark: Story<TextProps> = Template.bind({});
SizeXLDark.args = {
    isTitle: true,
    children: "Text",
    size: "size_xl",
};
SizeXLDark.decorators = [ThemeDecorator(Theme.DARK)];
