import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { HStackProps } from "./HStack.types";
import { HStack } from "./HStack";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/HStack",
    component: HStack,
} as ComponentMeta<typeof HStack>;

const Template: ComponentStory<typeof HStack> = (args) => <HStack {...args} />;

export const Light: Story<HStackProps> = Template.bind({});
Light.args = {
    children: "Text",
};

export const Dark: Story<HStackProps> = Template.bind({});
Dark.args = {
    children: "Text",
};
Dark.decorators = [ThemeDecorator("dark")];