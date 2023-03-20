import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { CommentsForArticleProps } from "./CommentsForArticle.types";
import { CommentsForArticle } from "./CommentsForArticle";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widgets/CommentsForArticle/CommentsForArticle",
    component: CommentsForArticle,
} as ComponentMeta<typeof CommentsForArticle>;

const Template: ComponentStory<typeof CommentsForArticle> = (args) => (
    <CommentsForArticle {...args} />
);

export const Light: Story<CommentsForArticleProps> = Template.bind({});
Light.args = {
    id: "1",
};
Light.decorators = [StoreDecorator({ articleDetailsComments: {} })];

export const Dark: Story<CommentsForArticleProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
