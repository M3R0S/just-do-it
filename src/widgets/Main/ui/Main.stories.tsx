import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { MainProps } from "./Main.types";
import { Main } from "./Main";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widgets/Main",
    component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Light: Story<MainProps> = Template.bind({});
Light.args = {
    children: "Text",
};

export const Dark: Story<MainProps> = Template.bind({});
Dark.args = {
    children: "Text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
