import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ButtonMemoProps } from "./Button.types";
import { Button } from "./Button";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "shared/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight: Story<ButtonMemoProps> = Template.bind({});
PrimaryLight.args = {
    children: "Text",
};

export const PrimaryDark: Story<ButtonMemoProps> = Template.bind({});
PrimaryDark.args = {
    children: "Text",
};
PrimaryDark.decorators = [ThemeDecorator("dark")];

export const ClearLight: Story<ButtonMemoProps> = Template.bind({});
ClearLight.args = {
    children: "Text",
    theme: "clear",
};

export const ClearDark: Story<ButtonMemoProps> = Template.bind({});
ClearDark.args = {
    children: "Text",
    theme: "clear",
};
ClearDark.decorators = [ThemeDecorator("dark")];

export const ClearInvertedLight: Story<ButtonMemoProps> = Template.bind({});
ClearInvertedLight.args = {
    children: "Text",
    theme: "clear",
};
ClearInvertedLight.decorators = [ThemeDecorator("dark")];

export const ClearInvertedDark: Story<ButtonMemoProps> = Template.bind({});
ClearInvertedDark.args = {
    children: "Text",
    theme: "clear",
};

export const RebootLight: Story<ButtonMemoProps> = Template.bind({});
RebootLight.args = {
    children: "Text",
    theme: "fill",
};

export const RebootDark: Story<ButtonMemoProps> = Template.bind({});
RebootDark.args = {
    children: "Text",
    theme: "fill",
};
RebootDark.decorators = [ThemeDecorator("dark")];

export const OutlineLightSizeM: Story<ButtonMemoProps> = Template.bind({});
OutlineLightSizeM.args = {
    children: "Text",
    theme: "outline",
    size: "m",
};

export const OutlineLightSizeL: Story<ButtonMemoProps> = Template.bind({});
OutlineLightSizeL.args = {
    children: "Text",
    theme: "outline",
    size: "l",
};

export const OutlineLightSizeXL: Story<ButtonMemoProps> = Template.bind({});
OutlineLightSizeXL.args = {
    children: "Text",
    theme: "outline",
    size: "xl",
};

export const OutlineDarkSizeM: Story<ButtonMemoProps> = Template.bind({});
OutlineDarkSizeM.args = {
    children: "Text",
    theme: "outline",
    size: "m",
};
OutlineDarkSizeM.decorators = [ThemeDecorator("dark")];

export const OutlineDarkSizeL: Story<ButtonMemoProps> = Template.bind({});
OutlineDarkSizeL.args = {
    children: "Text",
    theme: "outline",
    size: "l",
};
OutlineDarkSizeL.decorators = [ThemeDecorator("dark")];

export const OutlineDarkSizeXL: Story<ButtonMemoProps> = Template.bind({});
OutlineDarkSizeXL.args = {
    children: "Text",
    theme: "outline",
    size: "xl",
};
OutlineDarkSizeXL.decorators = [ThemeDecorator("dark")];

export const BackgroundLight: Story<ButtonMemoProps> = Template.bind({});
BackgroundLight.args = {
    children: "Text",
    theme: "background",
};

export const BackgroundDark: Story<ButtonMemoProps> = Template.bind({});
BackgroundDark.args = {
    children: "Text",
    theme: "background_inverted",
};
BackgroundDark.decorators = [ThemeDecorator("dark")];

export const SquareSizeMLight: Story<ButtonMemoProps> = Template.bind({});
SquareSizeMLight.args = {
    children: ">",
    square: true,
    theme: "background",
    size: "m",
};

export const SquareSizeLLight: Story<ButtonMemoProps> = Template.bind({});
SquareSizeLLight.args = {
    children: ">",
    square: true,
    theme: "background",
    size: "l",
};

export const SquareSizeXLLight: Story<ButtonMemoProps> = Template.bind({});
SquareSizeXLLight.args = {
    children: ">",
    square: true,
    theme: "background",
    size: "xl",
};

export const SquareSizeMDark: Story<ButtonMemoProps> = Template.bind({});
SquareSizeMDark.args = {
    children: ">",
    square: true,
    theme: "background_inverted",
    size: "m",
};
SquareSizeMDark.decorators = [ThemeDecorator("dark")];

export const SquareSizeLDark: Story<ButtonMemoProps> = Template.bind({});
SquareSizeLDark.args = {
    children: ">",
    square: true,
    theme: "background_inverted",
    size: "l",
};
SquareSizeLDark.decorators = [ThemeDecorator("dark")];

export const SquareSizeXLDark: Story<ButtonMemoProps> = Template.bind({});
SquareSizeXLDark.args = {
    children: ">",
    square: true,
    theme: "background_inverted",
    size: "xl",
};
SquareSizeXLDark.decorators = [ThemeDecorator("dark")];

export const DisabledLight: Story<ButtonMemoProps> = Template.bind({});
DisabledLight.args = {
    children: "Text",
    theme: "background_inverted",
    disabled: true,
};

export const DisabledDark: Story<ButtonMemoProps> = Template.bind({});
DisabledDark.args = {
    children: "Text",
    theme: "background_inverted",
    disabled: true,
};
DisabledDark.decorators = [ThemeDecorator("dark")];
