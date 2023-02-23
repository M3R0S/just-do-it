import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { PortalProps } from "./Portal.types";
import { Portal } from "./Portal";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Portal",
    component: Portal,
} as ComponentMeta<typeof Portal>;

const Template: ComponentStory<typeof Portal> = (args) => <Portal {...args} />;

export const Light: Story<PortalProps> = Template.bind({});
Light.args = {
    children: "Text",
};

export const Dark: Story<PortalProps> = Template.bind({});
Dark.args = {
    children: "Text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
