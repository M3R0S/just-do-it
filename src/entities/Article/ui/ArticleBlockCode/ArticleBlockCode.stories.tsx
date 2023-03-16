import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleBlockCodeProps } from "./ArticleBlockCode.types";
import { ArticleBlockCode } from "./ArticleBlockCode";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/ArticleBlockCode",
    component: ArticleBlockCode,
} as ComponentMeta<typeof ArticleBlockCode>;

const Template: ComponentStory<typeof ArticleBlockCode> = (args) => <ArticleBlockCode {...args} />;

export const Light: Story<ArticleBlockCodeProps> = Template.bind({});

export const Dark: Story<ArticleBlockCodeProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
