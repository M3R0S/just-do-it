import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ModalProps } from "./Modal.types";
import { Modal } from "./Modal";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { PortalDecorator } from "shared/config/storybook/decorators/PortalDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light: Story<ModalProps> = Template.bind({});
Light.args = {
    children:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, at!",
    isOpened: true,
};
// Light.decorators = [PortalDecorator]

export const Dark: Story<ModalProps> = Template.bind({});
Dark.args = {
    children:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, at!",
    isOpened: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
