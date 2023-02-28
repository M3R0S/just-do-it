import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { LoginFormProps } from "./LoginForm.types";
import { LoginForm } from "./LoginForm";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/LoginForm",
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Light: Story<LoginFormProps> = Template.bind({});

export const Dark: Story<LoginFormProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
