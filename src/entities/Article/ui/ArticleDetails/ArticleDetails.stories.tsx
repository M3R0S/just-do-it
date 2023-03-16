import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleDetailsProps } from "./ArticleDetails.types";
import { ArticleDetails } from "./ArticleDetails";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/ArticleDetails",
    component: ArticleDetails,
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Light: Story<ArticleDetailsProps> = Template.bind({});

export const Dark: Story<ArticleDetailsProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
