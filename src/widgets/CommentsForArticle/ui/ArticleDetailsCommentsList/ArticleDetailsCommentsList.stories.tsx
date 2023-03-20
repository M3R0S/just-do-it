import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleDetailsCommentsListProps } from "./ArticleDetailsCommentsList.types";
import { ArticleDetailsCommentsList } from "./ArticleDetailsCommentsList";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widgets/CommentsForArticle/ArticleDetailsCommentsList",
    component: ArticleDetailsCommentsList,
} as ComponentMeta<typeof ArticleDetailsCommentsList>;

const Template: ComponentStory<typeof ArticleDetailsCommentsList> = (args) => (
    <ArticleDetailsCommentsList {...args} />
);

export const Light: Story<ArticleDetailsCommentsListProps> = Template.bind({});

export const Dark: Story<ArticleDetailsCommentsListProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
