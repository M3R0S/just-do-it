import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ButtonTheme, ButtonProps, ButtonSize } from "./Button.types";
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

export const ClearInvertedLight: Story<ButtonProps> = Template.bind({});
ClearInvertedLight.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR,
};
ClearInvertedLight.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInvertedDark: Story<ButtonProps> = Template.bind({});
ClearInvertedDark.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR,
};

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

export const OutlineLightSizeM: Story<ButtonProps> = Template.bind({});
OutlineLightSizeM.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlineLightSizeL: Story<ButtonProps> = Template.bind({});
OutlineLightSizeL.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineLightSizeXL: Story<ButtonProps> = Template.bind({});
OutlineLightSizeXL.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDarkSizeM: Story<ButtonProps> = Template.bind({});
OutlineDarkSizeM.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};
OutlineDarkSizeM.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkSizeL: Story<ButtonProps> = Template.bind({});
OutlineDarkSizeL.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
OutlineDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkSizeXL: Story<ButtonProps> = Template.bind({});
OutlineDarkSizeXL.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
OutlineDarkSizeXL.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundLight: Story<ButtonProps> = Template.bind({});
BackgroundLight.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDark: Story<ButtonProps> = Template.bind({});
BackgroundDark.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeMLight: Story<ButtonProps> = Template.bind({});
SquareSizeMLight.args = {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M,
};

export const SquareSizeLLight: Story<ButtonProps> = Template.bind({});
SquareSizeLLight.args = {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L,
};

export const SquareSizeXLLight: Story<ButtonProps> = Template.bind({});
SquareSizeXLLight.args = {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
};

export const SquareSizeMDark: Story<ButtonProps> = Template.bind({});
SquareSizeMDark.args = {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
};

export const SquareSizeLDark: Story<ButtonProps> = Template.bind({});
SquareSizeLDark.args = {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
};

export const SquareSizeXLDark: Story<ButtonProps> = Template.bind({});
SquareSizeXLDark.args = {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};
