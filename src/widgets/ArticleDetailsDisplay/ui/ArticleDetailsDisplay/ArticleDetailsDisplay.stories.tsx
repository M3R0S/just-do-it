import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleDetailsDisplayProps } from "./ArticleDetailsDisplay.types";
import { ArticleDetailsDisplay } from "./ArticleDetailsDisplay";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "widgets/ArticleDetailsDisplay/ArticleDetailsDisplay",
    component: ArticleDetailsDisplay,
} as ComponentMeta<typeof ArticleDetailsDisplay>;

const Template: ComponentStory<typeof ArticleDetailsDisplay> = (args) => (
    <ArticleDetailsDisplay {...args} />
);

export const Light: Story<ArticleDetailsDisplayProps> = Template.bind({});

export const Dark: Story<ArticleDetailsDisplayProps> = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];
