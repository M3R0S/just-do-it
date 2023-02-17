import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { Navbar } from "./Navbar";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widget/Navbar",
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light: Story = Template.bind({});

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
