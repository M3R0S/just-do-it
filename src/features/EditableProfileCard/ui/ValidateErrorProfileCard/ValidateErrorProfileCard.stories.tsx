import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ValidateErrorProfileCardProps } from "./ValidateErrorProfileCard.types";
import { ValidateErrorProfileCard } from "./ValidateErrorProfileCard";
import { ValidateProfileError } from "../../model/types/ProfileSchema";

import { StateSchema } from "app/providers/Store";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/EditableProfileCard/ValidateErrorProfileCard",
    component: ValidateErrorProfileCard,
} as ComponentMeta<typeof ValidateErrorProfileCard>;

const Template: ComponentStory<typeof ValidateErrorProfileCard> = (args) => (
    <ValidateErrorProfileCard {...args} />
);

const store: DeepPartial<StateSchema> = {
    profile: {
        validateErrors: [
            ValidateProfileError.NO_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.SERVER_ERROR,
        ],
    },
};

export const Light: Story<ValidateErrorProfileCardProps> = Template.bind({});
Light.decorators = [StoreDecorator(store)];

export const Dark: Story<ValidateErrorProfileCardProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(store)];
