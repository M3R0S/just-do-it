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
    text: "Text",
};

export const Dark: Story<TextProps> = Template.bind({});
Dark.args = {
    isTitle: true,
    text: "Text",
};
Dark.decorators = [ThemeDecorator("dark")];

export const ErrorLight: Story<TextProps> = Template.bind({});
ErrorLight.args = {
    isTitle: true,
    text: "Text",
    theme: "error",
};

export const ErrorDark: Story<TextProps> = Template.bind({});
ErrorDark.args = {
    isTitle: true,
    text: "Text",
    theme: "error",
};
ErrorDark.decorators = [ThemeDecorator("dark")];

export const SizeMLight: Story<TextProps> = Template.bind({});
SizeMLight.args = {
    isTitle: true,
    text: "Text",
    size: "m",
};

export const SizeMDark: Story<TextProps> = Template.bind({});
SizeMDark.args = {
    isTitle: true,
    text: "Text",
    size: "m",
};
SizeMDark.decorators = [ThemeDecorator("dark")];

export const SizeLLight: Story<TextProps> = Template.bind({});
SizeLLight.args = {
    isTitle: true,
    text: "Text",
    size: "l",
};

export const SizeLDark: Story<TextProps> = Template.bind({});
SizeLDark.args = {
    isTitle: true,
    text: "Text",
    size: "l",
};
SizeLDark.decorators = [ThemeDecorator("dark")];

export const SizeXLLight: Story<TextProps> = Template.bind({});
SizeXLLight.args = {
    isTitle: true,
    text: "Text",
    size: "xl",
};

export const SizeXLDark: Story<TextProps> = Template.bind({});
SizeXLDark.args = {
    isTitle: true,
    text: "Text",
    size: "xl",
};
SizeXLDark.decorators = [ThemeDecorator("dark")];
