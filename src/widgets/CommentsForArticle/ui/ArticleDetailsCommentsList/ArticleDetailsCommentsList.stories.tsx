import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleDetailsCommentsListProps } from "./ArticleDetailsCommentsList.types";
import { ArticleDetailsCommentsList } from "./ArticleDetailsCommentsList";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widgets/CommentsForArticle/ArticleDetailsCommentsList",
    component: ArticleDetailsCommentsList,
    args: {
        id: "1",
    },
    decorators: [
        StoreDecorator({
            articleDetailsComments: {
                ids: ["1", "2"],
                entities: {
                    "1": {
                        id: "1",
                        text: "comment 1",
                        user: { id: "1", username: "user" },
                    },
                    "2": {
                        id: "1",
                        text: "comment 1",
                        user: { id: "1", username: "user" },
                    },
                },
            },
        }),
    ],
} as ComponentMeta<typeof ArticleDetailsCommentsList>;

const Template: ComponentStory<typeof ArticleDetailsCommentsList> = (args) => (
    <ArticleDetailsCommentsList {...args} />
);

export const Light: Story<ArticleDetailsCommentsListProps> = Template.bind({});

export const Dark: Story<ArticleDetailsCommentsListProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
