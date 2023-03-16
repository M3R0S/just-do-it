import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticleBlockImageProps } from "./ArticleBlockImage.types";
import { ArticleBlockImage } from "./ArticleBlockImage";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/ArticleBlockImage",
    component: ArticleBlockImage,
} as ComponentMeta<typeof ArticleBlockImage>;

const Template: ComponentStory<typeof ArticleBlockImage> = (args) => (
    <ArticleBlockImage {...args} />
);

export const Light: Story<ArticleBlockImageProps> = Template.bind({});

export const Dark: Story<ArticleBlockImageProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
