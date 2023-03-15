import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { Sidebar } from "./Sidebar";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widgets/Sidebar/Sidebar",
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light: Story = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const UserRedyLight: Story = Template.bind({});
UserRedyLight.decorators = [StoreDecorator({ user: { authData: { username: "user" } } })];

export const UserRedyDark: Story = Template.bind({});
UserRedyDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: { username: "user" } } }),
];
