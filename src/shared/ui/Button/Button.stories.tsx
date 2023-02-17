import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ButtonTheme, ButtonProps } from "./Button.types";
import { Button } from "./Button";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight: Story<ButtonProps> = Template.bind({});
PrimaryLight.args = {
    children: "Text",
};

export const PrimaryDark: Story<ButtonProps> = Template.bind({});
PrimaryDark.args = {
    children: "Text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight: Story<ButtonProps> = Template.bind({});
ClearLight.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR,
};

export const ClearDark: Story<ButtonProps> = Template.bind({});
ClearDark.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RebootLight: Story<ButtonProps> = Template.bind({});
RebootLight.args = {
    children: "Text",
    theme: ButtonTheme.FILL,
};

export const RebootDark: Story<ButtonProps> = Template.bind({});
RebootDark.args = {
    children: "Text",
    theme: ButtonTheme.FILL,
};
RebootDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight: Story<ButtonProps> = Template.bind({});
OutlineLight.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark: Story<ButtonProps> = Template.bind({});
OutlineDark.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
