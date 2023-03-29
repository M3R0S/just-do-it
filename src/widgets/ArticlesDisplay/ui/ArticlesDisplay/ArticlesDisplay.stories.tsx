import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ArticlesDisplayProps } from "./ArticlesDisplay.types";
import { ArticlesDisplay } from "./ArticlesDisplay";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widgets/ArticlesDisplay",
    component: ArticlesDisplay,
} as ComponentMeta<typeof ArticlesDisplay>;

const Template: ComponentStory<typeof ArticlesDisplay> = (args) => <ArticlesDisplay {...args} />;

export const Light: Story<ArticlesDisplayProps> = Template.bind({});

export const Dark: Story<ArticlesDisplayProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
