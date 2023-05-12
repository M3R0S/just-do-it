import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { MenuProps } from "./Menu.types";
import { Menu } from "./Menu";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "shared/Menu",
    component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Light: Story<MenuProps> = Template.bind({});
Light.args = {};

export const Dark: Story<MenuProps> = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator("dark")];
