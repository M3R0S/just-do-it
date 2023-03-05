import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { LoginModalProps } from "./LoginModal.types";
import { LoginModal } from "./LoginModal";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/LoginModal",
    component: LoginModal,
    parameters: {
        loki: {
            skip: true,
        },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Light: Story<LoginModalProps> = Template.bind({});
Light.args = {
    isOpened: true,
};
Light.decorators = [
    StoreDecorator({
        login: {
            username: "admin",
            password: "123",
            isLoading: false,
        },
    }),
];

export const Dark: Story<LoginModalProps> = Template.bind({});
Dark.args = {
    isOpened: true,
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        login: {
            username: "admin",
            password: "123",
            isLoading: false,
        },
    }),
];

export const ErrorLight: Story<LoginModalProps> = Template.bind({});
ErrorLight.args = {
    isOpened: true,
};
ErrorLight.decorators = [
    StoreDecorator({
        login: {
            username: "admin",
            password: "123",
            isLoading: false,
            error: "403",
        },
    }),
];

export const ErrorDark: Story<LoginModalProps> = Template.bind({});
ErrorDark.args = {
    isOpened: true,
};
ErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        login: {
            username: "admin",
            password: "123",
            isLoading: false,
            error: "403",
        },
    }),
];

export const LoadingLight: Story<LoginModalProps> = Template.bind({});
LoadingLight.args = {
    isOpened: true,
};
LoadingLight.decorators = [
    StoreDecorator({
        login: {
            username: "admin",
            password: "123",
            isLoading: true,
        },
    }),
];

export const LoadingDark: Story<LoginModalProps> = Template.bind({});
LoadingDark.args = {
    isOpened: true,
};
LoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        login: {
            username: "admin",
            password: "123",
            isLoading: true,
        },
    }),
];
