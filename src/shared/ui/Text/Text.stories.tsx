import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { TextProps } from "./Text.types";
import { Text } from "./Text";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

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
Dark.decorators = [ThemeDecorator("dark")];

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
ErrorDark.decorators = [ThemeDecorator("dark")];

export const SizeMLight: Story<TextProps> = Template.bind({});
SizeMLight.args = {
    isTitle: true,
    children: "Text",
    size: "m",
};

export const SizeMDark: Story<TextProps> = Template.bind({});
SizeMDark.args = {
    isTitle: true,
    children: "Text",
    size: "m",
};
SizeMDark.decorators = [ThemeDecorator("dark")];

export const SizeLLight: Story<TextProps> = Template.bind({});
SizeLLight.args = {
    isTitle: true,
    children: "Text",
    size: "l",
};

export const SizeLDark: Story<TextProps> = Template.bind({});
SizeLDark.args = {
    isTitle: true,
    children: "Text",
    size: "l",
};
SizeLDark.decorators = [ThemeDecorator("dark")];

export const SizeXLLight: Story<TextProps> = Template.bind({});
SizeXLLight.args = {
    isTitle: true,
    children: "Text",
    size: "xl",
};

export const SizeXLDark: Story<TextProps> = Template.bind({});
SizeXLDark.args = {
    isTitle: true,
    children: "Text",
    size: "xl",
};
SizeXLDark.decorators = [ThemeDecorator("dark")];
