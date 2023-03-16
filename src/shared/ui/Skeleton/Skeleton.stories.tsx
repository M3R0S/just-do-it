import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { SkeletonProps } from "./Skeleton.types";
import { Skeleton } from "./Skeleton";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Skeleton",
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Light: Story<SkeletonProps> = Template.bind({});

export const Dark: Story<SkeletonProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
