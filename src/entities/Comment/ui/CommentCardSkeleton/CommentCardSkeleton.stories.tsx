import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { CommentCardSkeletonProps } from "./CommentCardSkeleton.types";
import { CommentCardSkeleton } from "./CommentCardSkeleton";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/Comment/CommentCardSkeleton",
    component: CommentCardSkeleton,
} as ComponentMeta<typeof CommentCardSkeleton>;

const Template: ComponentStory<typeof CommentCardSkeleton> = (args) => (
    <CommentCardSkeleton {...args} />
);

export const Light: Story<CommentCardSkeletonProps> = Template.bind({});

export const Dark: Story<CommentCardSkeletonProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
