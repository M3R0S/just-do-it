import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { CardProps } from "./Card.types";
import { Card } from "./Card";
import { Text } from "../Text";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Card",
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light: Story<CardProps> = Template.bind({});
Light.args = {
    children: (
        <Text
            isTitle
            tag="h1"
        >
            Text
        </Text>
    ),
};

export const Dark: Story<CardProps> = Template.bind({});
Dark.args = {
    children: (
        <Text
            isTitle
            tag="h1"
        >
            Text
        </Text>
    ),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
