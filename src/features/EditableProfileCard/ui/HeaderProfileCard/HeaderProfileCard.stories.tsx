import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { HeaderProfileCardProps } from "./HeaderProfileCard.types";
import { HeaderProfileCard } from "./HeaderProfileCard";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "/HeaderProfileCard",
    component: HeaderProfileCard,
} as ComponentMeta<typeof HeaderProfileCard>;

const Template: ComponentStory<typeof HeaderProfileCard> = (args) => (
    <HeaderProfileCard {...args} />
);

export const Light: Story<HeaderProfileCardProps> = Template.bind({});

export const Dark: Story<HeaderProfileCardProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
