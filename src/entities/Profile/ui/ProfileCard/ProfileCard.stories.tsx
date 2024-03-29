import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ProfileCardProps } from "./ProfileCard.types";
import { ProfileCard } from "./ProfileCard";
import { Profile } from "../../model/types/Profile";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "entities/Profile/ProfileCard",
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

const data: Profile = {
    firstname: "Bogdan",
    lastname: "Moskalenko",
    age: "21",
    currency: "RUB",
    country: "Russia",
    city: "Yalta",
    username: "admin",
    avatar: "https://anekdo.net/pic/photo/221026-233029vwf.jpg",
};

export const Light: Story<ProfileCardProps> = Template.bind({});
Light.args = {
    data,
};

export const Dark: Story<ProfileCardProps> = Template.bind({});
Dark.args = {
    data,
};
Dark.decorators = [ThemeDecorator("dark")];

export const WithErrorLight: Story<ProfileCardProps> = Template.bind({});
WithErrorLight.args = {
    error: "error",
};

export const WithErrorDark: Story<ProfileCardProps> = Template.bind({});
WithErrorDark.args = {
    error: "error",
};
WithErrorDark.decorators = [ThemeDecorator("dark")];

export const WithIsLoadingLight: Story<ProfileCardProps> = Template.bind({});
WithIsLoadingLight.args = {
    isLoading: true,
};
WithIsLoadingLight.parameters = {
    loki: {
        skip: true,
    },
};

export const WithIsLoadingDark: Story<ProfileCardProps> = Template.bind({});
WithIsLoadingDark.args = {
    isLoading: true,
};
WithIsLoadingDark.decorators = [ThemeDecorator("dark")];
WithIsLoadingDark.parameters = {
    loki: {
        skip: true,
    },
};
