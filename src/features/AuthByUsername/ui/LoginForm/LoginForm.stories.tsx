import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { LoginFormProps } from "./LoginForm.types";
import LoginForm from "./LoginForm";

import { StateSchema } from "app/providers/Store";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "features/AuthByUsername/LoginForm",
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

const initStateStoreDecorator: DeepPartial<StateSchema> = {
    login: {
        username: "admin",
        password: "123",
        isLoading: false,
    },
};

export const Light: Story<LoginFormProps> = Template.bind({});
Light.decorators = [StoreDecorator(initStateStoreDecorator)];

export const Dark: Story<LoginFormProps> = Template.bind({});
Dark.decorators = [ThemeDecorator("dark"), StoreDecorator(initStateStoreDecorator)];
