import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleRecommendationsListProps } from "./ArticleRecommendationsList.types";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "widgets/ArticleRecomendationsList",
    component: ArticleRecommendationsList,
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

export const Light: Story<ArticleRecommendationsListProps> = Template.bind({});

export const Dark: Story<ArticleRecommendationsListProps> = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];
