import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import ArticlesPage from "./ArticlesPage";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "pages/ArticlesPage",
    component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Light: Story = Template.bind({});
Light.decorators = [StoreDecorator({ scroll: { scroll: { page: 0 } } })];

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ scroll: { scroll: { page: 0 } } })];
