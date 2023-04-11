import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { UserProfileProps } from "./UserProfile.types";
import { UserProfile } from "./UserProfile";

import { StateSchema } from "app/providers/Store";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "widgets/UserProfile",
    component: UserProfile,
} as ComponentMeta<typeof UserProfile>;

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

const Template: ComponentStory<typeof UserProfile> = (args) => <UserProfile {...args} />;

export const Light: Story<UserProfileProps> = Template.bind({});
Light.decorators = [StoreDecorator(store)];

export const Dark: Story<UserProfileProps> = Template.bind({});
Dark.decorators = [ThemeDecorator("dark"), StoreDecorator(store)];
