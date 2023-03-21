import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleListProps } from "./ArticleList.types";
import { ArticleList } from "./ArticleList";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/Article/ArticleList",
    component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const Light: Story<ArticleListProps> = Template.bind({});

export const Dark: Story<ArticleListProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
