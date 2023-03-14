import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { HeaderProfileCardProps } from "./HeaderProfileCard.types";
import { HeaderProfileCard } from "./HeaderProfileCard";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/EditableProfileCard/HeaderProfileCard",
    component: HeaderProfileCard,
} as ComponentMeta<typeof HeaderProfileCard>;

const Template: ComponentStory<typeof HeaderProfileCard> = (args) => (
    <HeaderProfileCard {...args} />
);

export const LightReadonlyTrue: Story<HeaderProfileCardProps> = Template.bind({});
LightReadonlyTrue.decorators = [
    StoreDecorator({
        profile: {
            isReadonly: true,
        },
    }),
];

export const DarkReadonlyTrue: Story<HeaderProfileCardProps> = Template.bind({});
DarkReadonlyTrue.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            isReadonly: true,
        },
    }),
];

export const LightReadonlyFalse: Story<HeaderProfileCardProps> = Template.bind({});
LightReadonlyFalse.decorators = [
    StoreDecorator({
        profile: {
            isReadonly: false,
        },
    }),
];

export const DarkReadonlyFalse: Story<HeaderProfileCardProps> = Template.bind({});
DarkReadonlyFalse.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            isReadonly: false,
        },
    }),
];
