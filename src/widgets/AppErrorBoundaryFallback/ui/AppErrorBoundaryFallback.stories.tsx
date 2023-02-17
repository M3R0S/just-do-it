import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { AppErrorBoundaryFallback } from "./AppErrorBoundaryFallback";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widget/AppErrorBoundaryFallback",
    component: AppErrorBoundaryFallback,
} as ComponentMeta<typeof AppErrorBoundaryFallback>;

const Template: ComponentStory<typeof AppErrorBoundaryFallback> = (args) => (
    <AppErrorBoundaryFallback {...args} />
);

export const Light: Story = Template.bind({});

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
