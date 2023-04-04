import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticlesSortedSelectProps } from "./ArticlesSortedSelect.types";
import { ArticlesSortedSelect } from "./ArticlesSortedSelect";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/ArticlesSorted/ArticleSortedSelect",
    component: ArticlesSortedSelect,
} as ComponentMeta<typeof ArticlesSortedSelect>;

const Template: ComponentStory<typeof ArticlesSortedSelect> = (args) => (
    <ArticlesSortedSelect {...args} />
);

export const Light: Story<ArticlesSortedSelectProps> = Template.bind({});
Light.decorators = [
    StoreDecorator({
        articlesSorted: {
            order: "asc",
            sort: "createdAt",
        },
    }),
];

export const Dark: Story<ArticlesSortedSelectProps> = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articlesSorted: {
            order: "asc",
            sort: "createdAt",
        },
    }),
];
