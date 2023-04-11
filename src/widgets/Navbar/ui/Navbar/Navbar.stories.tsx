import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { Navbar } from "./Navbar";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "widgets/Navbar",
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light: Story = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator("dark"), StoreDecorator({})];

export const AuthLight: Story = Template.bind({});
AuthLight.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: "",
                username: "",
            },
        },
    }),
];

export const AuthDark: Story = Template.bind({});
AuthDark.decorators = [
    ThemeDecorator("dark"),
    StoreDecorator({
        user: {
            authData: {
                id: "",
                username: "",
            },
        },
    }),
];
