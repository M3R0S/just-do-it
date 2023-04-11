import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { LoaderProps } from "./Loader.types";
import { Loader } from "./Loader";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "shared/Loader",
    component: Loader,
    parameters: {
        loki: {
            skip: true,
        },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const StandartLight: Story<LoaderProps> = Template.bind({});
StandartLight.args = {
    theme: "standart",
};

export const StandartDark: Story<LoaderProps> = Template.bind({});
StandartDark.args = {
    theme: "standart",
};
StandartDark.decorators = [ThemeDecorator("dark")];
