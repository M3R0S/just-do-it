import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ProfileCardItemProps } from "./ProfileCardItem.types";
import { ProfileCardItem } from "./ProfileCardItem";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "entities/Profile/ProfileCardItem",
    component: ProfileCardItem,
    args: {
        value: "Bogdan",
        placeholder: "Your name",
    },
} as ComponentMeta<typeof ProfileCardItem>;

const Template: ComponentStory<typeof ProfileCardItem> = (args) => <ProfileCardItem {...args} />;

export const Light: Story<ProfileCardItemProps> = Template.bind({});

export const Dark: Story<ProfileCardItemProps> = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];
