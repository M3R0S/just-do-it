import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import ProfilePage from "./ProfilePage";

import { StateSchema } from "app/providers/Store";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

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

export const Light: Story = Template.bind({});
Light.decorators = [StoreDecorator(store)];

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator("dark"), StoreDecorator(store)];
