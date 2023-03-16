import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleBlockTextProps } from "./ArticleBlockText.types";
import { ArticleBlockText } from "./ArticleBlockText";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/ArticleBlockText",
    component: ArticleBlockText,
} as ComponentMeta<typeof ArticleBlockText>;

const Template: ComponentStory<typeof ArticleBlockText> = (args) => <ArticleBlockText {...args} />;

export const Light: Story<ArticleBlockTextProps> = Template.bind({});

export const Dark: Story<ArticleBlockTextProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
