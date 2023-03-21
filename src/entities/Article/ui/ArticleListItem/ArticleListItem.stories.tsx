import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleListItemProps } from "./ArticleListItem.types";
import { ArticleListItem } from "./ArticleListItem";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/Article/ArticleListItem",
    component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const Light: Story<ArticleListItemProps> = Template.bind({});

export const Dark: Story<ArticleListItemProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
