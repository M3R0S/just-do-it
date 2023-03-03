import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { LoginModalProps } from "./LoginModal.types";
import { LoginModal } from "./LoginModal";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/LoginModal",
    component: LoginModal,
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Light: Story<LoginModalProps> = Template.bind({});
Light.args = {
    isOpened: true,
};

export const Dark: Story<LoginModalProps> = Template.bind({});
Dark.args = {
    isOpened: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
