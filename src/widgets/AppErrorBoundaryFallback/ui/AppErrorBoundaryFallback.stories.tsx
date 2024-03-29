import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { AppErrorBoundaryFallback } from "./AppErrorBoundaryFallback";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "widgets/AppErrorBoundaryFallback",
    component: AppErrorBoundaryFallback,
} as ComponentMeta<typeof AppErrorBoundaryFallback>;

const Template: ComponentStory<typeof AppErrorBoundaryFallback> = (args) => (
    <AppErrorBoundaryFallback {...args} />
);

export const Light: Story = Template.bind({});

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];
