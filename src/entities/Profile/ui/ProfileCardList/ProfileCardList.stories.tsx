import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ProfileCardListProps } from "./ProfileCardList.types";
import { ProfileCardList } from "./ProfileCardList";

import AvatarImage from "shared/assets/tests/storybook_avatar.jpg";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/Profile/ProfileCardList",
    component: ProfileCardList,
    args: {
        data: {
            firstname: "Bogdan",
            lastname: "Moskalenko",
            age: "21",
            currency: "RUB",
            country: "Russia",
            city: "Yalta",
            username: "admin",
            avatar: AvatarImage,
        },
    },
} as ComponentMeta<typeof ProfileCardList>;

const Template: ComponentStory<typeof ProfileCardList> = (args) => <ProfileCardList {...args} />;

export const Light: Story<ProfileCardListProps> = Template.bind({});

export const Dark: Story<ProfileCardListProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
