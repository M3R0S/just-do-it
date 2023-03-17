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

export const NormalLight: Story<SkeletonProps> = Template.bind({});
NormalLight.args = {
    width: "100%",
    height: 200,
};

export const NormalDark: Story<SkeletonProps> = Template.bind({});
NormalDark.args = {
    width: "100%",
    height: 200,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleLight: Story<SkeletonProps> = Template.bind({});
CircleLight.args = {
    width: 100,
    height: 100,
    borderRadius: "50%",
};

export const CircleDark: Story<SkeletonProps> = Template.bind({});
CircleDark.args = {
    width: 100,
    height: 100,
    borderRadius: "50%",
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
