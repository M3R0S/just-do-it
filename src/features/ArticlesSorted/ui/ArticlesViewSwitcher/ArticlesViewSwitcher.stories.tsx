import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticlesViewSwitcherProps } from "./ArticlesViewSwitcher.types";
import { ArticlesViewSwitcher } from "./ArticlesViewSwitcher";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "features/ArticlesSorted/ArticleViewSwitcher",
    component: ArticlesViewSwitcher,
} as ComponentMeta<typeof ArticlesViewSwitcher>;

const Template: ComponentStory<typeof ArticlesViewSwitcher> = (args) => (
    <ArticlesViewSwitcher {...args} />
);

export const Light: Story<ArticlesViewSwitcherProps> = Template.bind({});
Light.decorators = [
    StoreDecorator({
        articlesSorted: {
            view: "tile",
        },
    }),
];

export const Dark: Story<ArticlesViewSwitcherProps> = Template.bind({});
Dark.decorators = [
    ThemeDecorator("dark"),
    StoreDecorator({
        articlesSorted: {
            view: "tile",
        },
    }),
];
