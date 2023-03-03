import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { TitleProps, TitleTheme } from "./Title.types";
import { Title } from "./Title";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Title",
    component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Light: Story<TitleProps> = Template.bind({});
Light.args = {
    children: "Text",
};

export const Dark: Story<TitleProps> = Template.bind({});
Dark.args = {
    children: "Text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorLight: Story<TitleProps> = Template.bind({});
ErrorLight.args = {
    children: "Text",
    theme: TitleTheme.ERROR,
};

export const ErrorDark: Story<TitleProps> = Template.bind({});
ErrorDark.args = {
    children: "Text",
    theme: TitleTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
