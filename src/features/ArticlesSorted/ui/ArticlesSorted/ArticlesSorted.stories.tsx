import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticlesSortedProps } from "./ArticlesSorted.types";
import { ArticlesSorted } from "./ArticlesSorted";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "features/ArticlesSorted/ArticlesSorted",
    component: ArticlesSorted,
} as ComponentMeta<typeof ArticlesSorted>;

const Template: ComponentStory<typeof ArticlesSorted> = (args) => <ArticlesSorted {...args} />;

export const Light: Story<ArticlesSortedProps> = Template.bind({});
Light.decorators = [
    StoreDecorator({
        articlesSorted: {
            order: "asc",
            sort: "createdAt",
            search: "search",
            view: "tile",
        },
    }),
];

export const Dark: Story<ArticlesSortedProps> = Template.bind({});
Dark.decorators = [
    ThemeDecorator("dark"),
    StoreDecorator({
        articlesSorted: {
            order: "asc",
            sort: "createdAt",
            search: "search",
            view: "tile",
        },
    }),
];
