import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { EditableProfileCardProps } from "./EditableProfileCard.types";
import { EditableProfileCard } from "./EditableProfileCard";

import { StateSchema } from "app/providers/Store";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "features/EditableProfileCard/EditableProfileCard",
    component: EditableProfileCard,
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

const store: DeepPartial<StateSchema> = {
    profile: {
        form: {
            firstname: "Bogdan",
            lastname: "Moskalenko",
            age: "21",
            currency: "RUB",
            country: "Russia",
            city: "Yalta",
            username: "admin",
            avatar: "https://anekdo.net/pic/photo/221026-233029vwf.jpg",
        },
    },
};

export const Light: Story<EditableProfileCardProps> = Template.bind({});
Light.decorators = [StoreDecorator(store)];

export const Dark: Story<EditableProfileCardProps> = Template.bind({});
Dark.decorators = [ThemeDecorator("dark"), StoreDecorator(store)];
