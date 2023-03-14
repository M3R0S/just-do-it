import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ProfileCardProps } from "./ProfileCard.types";
import { ProfileCard } from "./ProfileCard";
import { Profile } from "../../model/types/Profile";

import AvatarImage from "shared/assets/tests/storybook_avatar.jpg";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

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
    avatar: AvatarImage,
};

export const Light: Story<ProfileCardProps> = Template.bind({});
Light.args = {
    data,
};

export const Dark: Story<ProfileCardProps> = Template.bind({});
Dark.args = {
    data,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithErrorLight: Story<ProfileCardProps> = Template.bind({});
WithErrorLight.args = {
    error: "error",
};

export const WithErrorDark: Story<ProfileCardProps> = Template.bind({});
WithErrorDark.args = {
    error: "error",
};
WithErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
