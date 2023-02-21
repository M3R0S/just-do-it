import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { LoaderProps, LoaderTheme } from "./Loader.types";
import { Loader } from "./Loader";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

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
    theme: LoaderTheme.STANDART,
};

export const StandartDark: Story<LoaderProps> = Template.bind({});
StandartDark.args = {
    theme: LoaderTheme.STANDART,
};
StandartDark.decorators = [ThemeDecorator(Theme.DARK)];
