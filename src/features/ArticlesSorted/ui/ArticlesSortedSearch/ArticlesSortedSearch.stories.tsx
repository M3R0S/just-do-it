import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticlesSortedSearchProps } from "./ArticlesSortedSearch.types";
import { ArticlesSortedSearch } from "./ArticlesSortedSearch";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "features/ArticlesSorted/ArticlesSortedSearch",
    component: ArticlesSortedSearch,
} as ComponentMeta<typeof ArticlesSortedSearch>;

const Template: ComponentStory<typeof ArticlesSortedSearch> = (args) => (
    <ArticlesSortedSearch {...args} />
);

export const Light: Story<ArticlesSortedSearchProps> = Template.bind({});
Light.decorators = [
    StoreDecorator({
        articlesSorted: {
            search: "search",
        },
    }),
];

export const Dark: Story<ArticlesSortedSearchProps> = Template.bind({});
Dark.decorators = [
    ThemeDecorator("dark"),
    StoreDecorator({
        articlesSorted: {
            search: "search",
        },
    }),
];
