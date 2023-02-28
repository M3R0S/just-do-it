import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { InputProps, InputTheme } from "./Input.types";
import { Input } from "./Input";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const ClearLight: Story<InputProps> = Template.bind({});
ClearLight.args = {
    theme: InputTheme.CLEAR,
    value: "Text",
};

export const ClearDark: Story<InputProps> = Template.bind({});
ClearDark.args = {
    theme: InputTheme.CLEAR,
    value: "Text",
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedLight: Story<InputProps> = Template.bind({});
InvertedLight.args = {
    theme: InputTheme.INVERTED,
    value: "Text",
};

export const InvertedDark: Story<InputProps> = Template.bind({});
InvertedDark.args = {
    theme: InputTheme.INVERTED,
    value: "Text",
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
