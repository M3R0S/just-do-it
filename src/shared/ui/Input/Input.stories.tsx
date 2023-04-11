import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { InputProps } from "./Input.types";
import { Input } from "./Input";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "shared/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const ClearLight: Story<InputProps> = Template.bind({});
ClearLight.args = {
    theme: "clear",
    value: "Text",
};

export const ClearDark: Story<InputProps> = Template.bind({});
ClearDark.args = {
    theme: "clear",
    value: "Text",
};
ClearDark.decorators = [ThemeDecorator("dark")];

export const InvertedLight: Story<InputProps> = Template.bind({});
InvertedLight.args = {
    theme: "inverted",
    value: "Text",
};

export const InvertedDark: Story<InputProps> = Template.bind({});
InvertedDark.args = {
    theme: "inverted",
    value: "Text",
};
InvertedDark.decorators = [ThemeDecorator("dark")];
