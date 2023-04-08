import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import ArticleEditPage from "./ArticleEditPage";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "pages/ArticleEditPage",
    component: ArticleEditPage,
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Light: Story = Template.bind({});

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];