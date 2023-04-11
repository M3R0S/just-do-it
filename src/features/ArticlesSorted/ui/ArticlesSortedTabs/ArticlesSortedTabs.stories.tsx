import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticlesSortedTabsProps } from "./ArticlesSortedTabs.types";
import { ArticlesSortedTabs } from "./ArticlesSortedTabs";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "features/ArticlesSorted/ArticlesSortedTabs",
    component: ArticlesSortedTabs,
} as ComponentMeta<typeof ArticlesSortedTabs>;

const Template: ComponentStory<typeof ArticlesSortedTabs> = (args) => (
    <ArticlesSortedTabs {...args} />
);

export const Light: Story<ArticlesSortedTabsProps> = Template.bind({});

export const Dark: Story<ArticlesSortedTabsProps> = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];
