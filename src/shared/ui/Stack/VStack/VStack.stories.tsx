import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { VStackProps } from "./VStack.types";
import { VStack } from "./VStack";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/VStack",
    component: VStack,
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = (args) => <VStack {...args} />;

export const Light: Story<VStackProps> = Template.bind({});
Light.args = {
    children: "Text",
};

export const Dark: Story<VStackProps> = Template.bind({});
Dark.args = {
    children: "Text",
};
Dark.decorators = [ThemeDecorator("dark")];