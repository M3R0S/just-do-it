import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { DropdownProps } from "./Dropdown.types";
import { Dropdown } from "./Dropdown";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "shared/Dropdown",
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Light: Story<DropdownProps> = Template.bind({});
Light.args = {};

export const Dark: Story<DropdownProps> = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator("dark")];
