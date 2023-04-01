import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticlesSortedSearchProps } from "./ArticlesSortedSearch.types";
import { ArticlesSortedSearch } from "./ArticlesSortedSearch";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/ArticlesSorted/ArticlesSortedSearch",
    component: ArticlesSortedSearch,
} as ComponentMeta<typeof ArticlesSortedSearch>;

const Template: ComponentStory<typeof ArticlesSortedSearch> = (args) => (
    <ArticlesSortedSearch {...args} />
);

export const Light: Story<ArticlesSortedSearchProps> = Template.bind({});

export const Dark: Story<ArticlesSortedSearchProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
