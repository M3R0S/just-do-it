import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { FlexProps } from "./Flex.types";
import { Flex } from "./Flex";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Flex",
    component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Light: Story<FlexProps> = Template.bind({});
Light.args = {
    children: "Text",
};

export const Dark: Story<FlexProps> = Template.bind({});
Dark.args = {
    children: "Text",
};
Dark.decorators = [ThemeDecorator("dark")];