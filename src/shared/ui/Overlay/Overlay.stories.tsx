import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { OverlayProps } from "./Overlay.types";
import { Overlay } from "./Overlay";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "shared/Overlay",
    component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />;

export const Light: Story<OverlayProps> = Template.bind({});
Light.args = {
    isActive: true,
};

export const Dark: Story<OverlayProps> = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];
Dark.args = {
    isActive: true,
};
