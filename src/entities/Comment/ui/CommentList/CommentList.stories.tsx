import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { CommentListProps } from "./CommentList.types";
import { CommentList } from "./CommentList";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/Comment/CommentList",
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light: Story<CommentListProps> = Template.bind({});

export const Dark: Story<CommentListProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
