import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { MainProfileCardProps } from "./MainProfileCard.types";
import { MainProfileCard } from "./MainProfileCard";

import { StateSchema } from "app/providers/Store";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/EditableProfileCard/MainProfileCard",
    component: MainProfileCard,
} as ComponentMeta<typeof MainProfileCard>;

const Template: ComponentStory<typeof MainProfileCard> = (args) => <MainProfileCard {...args} />;

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

export const Light: Story<MainProfileCardProps> = Template.bind({});
Light.decorators = [StoreDecorator(store)];

export const Dark: Story<MainProfileCardProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(store)];
