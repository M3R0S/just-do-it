import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleDetailsDisplayHeaderProps } from "./ArticleDetailsDisplayHeader.types";
import { ArticleDetailsDisplayHeader } from "./ArticleDetailsDisplayHeader";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widgets/ArticleDetailsDisplay/ArticleDetailsDisplayHeader",
    component: ArticleDetailsDisplayHeader,
} as ComponentMeta<typeof ArticleDetailsDisplayHeader>;

const Template: ComponentStory<typeof ArticleDetailsDisplayHeader> = (args) => <ArticleDetailsDisplayHeader {...args} />;

export const Light: Story<ArticleDetailsDisplayHeaderProps> = Template.bind({});

export const Dark: Story<ArticleDetailsDisplayHeaderProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];