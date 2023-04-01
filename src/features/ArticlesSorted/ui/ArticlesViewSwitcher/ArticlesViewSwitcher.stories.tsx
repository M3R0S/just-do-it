import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticlesViewSwitcherProps } from "./ArticlesViewSwitcher.types";
import { ArticlesViewSwitcher } from "./ArticlesViewSwitcher";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/ArticlesSorted/ArticleViewSwitcher",
    component: ArticlesViewSwitcher,
} as ComponentMeta<typeof ArticlesViewSwitcher>;

const Template: ComponentStory<typeof ArticlesViewSwitcher> = (args) => (
    <ArticlesViewSwitcher {...args} />
);

export const Light: Story<ArticlesViewSwitcherProps> = Template.bind({});

export const Dark: Story<ArticlesViewSwitcherProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
