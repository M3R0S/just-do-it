import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { MainProfileCardProps } from "./MainProfileCard.types";
import { MainProfileCard } from "./MainProfileCard";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "/MainProfileCard",
    component: MainProfileCard,
} as ComponentMeta<typeof MainProfileCard>;

const Template: ComponentStory<typeof MainProfileCard> = (args) => <MainProfileCard {...args} />;

export const Light: Story<MainProfileCardProps> = Template.bind({});

export const Dark: Story<MainProfileCardProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
