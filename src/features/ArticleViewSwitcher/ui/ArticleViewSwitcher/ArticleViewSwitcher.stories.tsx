import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleViewSwitcherProps } from "./ArticleViewSwitcher.types";
import { ArticleViewSwitcher } from "./ArticleViewSwitcher";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/ArticleViewSwitcher",
    component: ArticleViewSwitcher,
} as ComponentMeta<typeof ArticleViewSwitcher>;

const Template: ComponentStory<typeof ArticleViewSwitcher> = (args) => (
    <ArticleViewSwitcher {...args} />
);

export const Light: Story<ArticleViewSwitcherProps> = Template.bind({});

export const Dark: Story<ArticleViewSwitcherProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
