import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { CommentCardProps } from "./CommentCard.types";
import { CommentCard } from "./CommentCard";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/Comment/CommentCard",
    component: CommentCard,
    args: {
        comment: {
            id: "1",
            text: "Comment",
            user: { id: "1", username: "username" },
        },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light: Story<CommentCardProps> = Template.bind({});

export const Dark: Story<CommentCardProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
