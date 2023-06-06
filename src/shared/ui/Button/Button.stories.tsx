import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ButtonProps } from "./Button.types";
import { Button } from "./Button";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

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
PrimaryDark.decorators = [ThemeDecorator("dark")];

export const ClearLight: Story<ButtonProps> = Template.bind({});
ClearLight.args = {
    children: "Text",
    theme: "clear",
};

export const ClearDark: Story<ButtonProps> = Template.bind({});
ClearDark.args = {
    children: "Text",
    theme: "clear",
};
ClearDark.decorators = [ThemeDecorator("dark")];

export const ClearInvertedLight: Story<ButtonProps> = Template.bind({});
ClearInvertedLight.args = {
    children: "Text",
    theme: "clear",
};
ClearInvertedLight.decorators = [ThemeDecorator("dark")];

export const ClearInvertedDark: Story<ButtonProps> = Template.bind({});
ClearInvertedDark.args = {
    children: "Text",
    theme: "clear",
};

export const RebootLight: Story<ButtonProps> = Template.bind({});
RebootLight.args = {
    children: "Text",
    theme: "fill",
};

export const RebootDark: Story<ButtonProps> = Template.bind({});
RebootDark.args = {
    children: "Text",
    theme: "fill",
};
RebootDark.decorators = [ThemeDecorator("dark")];

export const OutlineLightSizeM: Story<ButtonProps> = Template.bind({});
OutlineLightSizeM.args = {
    children: "Text",
    theme: "outline",
    size: "m",
};

export const OutlineLightSizeL: Story<ButtonProps> = Template.bind({});
OutlineLightSizeL.args = {
    children: "Text",
    theme: "outline",
    size: "l",
};

export const OutlineLightSizeXL: Story<ButtonProps> = Template.bind({});
OutlineLightSizeXL.args = {
    children: "Text",
    theme: "outline",
    size: "xl",
};

export const OutlineDarkSizeM: Story<ButtonProps> = Template.bind({});
OutlineDarkSizeM.args = {
    children: "Text",
    theme: "outline",
    size: "m",
};
OutlineDarkSizeM.decorators = [ThemeDecorator("dark")];

export const OutlineDarkSizeL: Story<ButtonProps> = Template.bind({});
OutlineDarkSizeL.args = {
    children: "Text",
    theme: "outline",
    size: "l",
};
OutlineDarkSizeL.decorators = [ThemeDecorator("dark")];

export const OutlineDarkSizeXL: Story<ButtonProps> = Template.bind({});
OutlineDarkSizeXL.args = {
    children: "Text",
    theme: "outline",
    size: "xl",
};
OutlineDarkSizeXL.decorators = [ThemeDecorator("dark")];

export const BackgroundLight: Story<ButtonProps> = Template.bind({});
BackgroundLight.args = {
    children: "Text",
    theme: "background",
};

export const BackgroundDark: Story<ButtonProps> = Template.bind({});
BackgroundDark.args = {
    children: "Text",
    theme: "background_inverted",
};
BackgroundDark.decorators = [ThemeDecorator("dark")];

export const SquareSizeMLight: Story<ButtonProps> = Template.bind({});
SquareSizeMLight.args = {
    children: ">",
    square: true,
    theme: "background",
    size: "m",
};

export const SquareSizeLLight: Story<ButtonProps> = Template.bind({});
SquareSizeLLight.args = {
    children: ">",
    square: true,
    theme: "background",
    size: "l",
};

export const SquareSizeXLLight: Story<ButtonProps> = Template.bind({});
SquareSizeXLLight.args = {
    children: ">",
    square: true,
    theme: "background",
    size: "xl",
};

export const SquareSizeMDark: Story<ButtonProps> = Template.bind({});
SquareSizeMDark.args = {
    children: ">",
    square: true,
    theme: "background_inverted",
    size: "m",
};
SquareSizeMDark.decorators = [ThemeDecorator("dark")];

export const SquareSizeLDark: Story<ButtonProps> = Template.bind({});
SquareSizeLDark.args = {
    children: ">",
    square: true,
    theme: "background_inverted",
    size: "l",
};
SquareSizeLDark.decorators = [ThemeDecorator("dark")];

export const SquareSizeXLDark: Story<ButtonProps> = Template.bind({});
SquareSizeXLDark.args = {
    children: ">",
    square: true,
    theme: "background_inverted",
    size: "xl",
};
SquareSizeXLDark.decorators = [ThemeDecorator("dark")];

export const DisabledLight: Story<ButtonProps> = Template.bind({});
DisabledLight.args = {
    children: "Text",
    theme: "background_inverted",
    disabled: true,
};

export const DisabledDark: Story<ButtonProps> = Template.bind({});
DisabledDark.args = {
    children: "Text",
    theme: "background_inverted",
    disabled: true,
};
DisabledDark.decorators = [ThemeDecorator("dark")];
