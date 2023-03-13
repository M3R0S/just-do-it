import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { UserProfileProps } from "./UserProfile.types";
import { UserProfile } from "./UserProfile";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widgets/UserProfile",
    component: UserProfile,
} as ComponentMeta<typeof UserProfile>;

const Template: ComponentStory<typeof UserProfile> = (args) => <UserProfile {...args} />;

export const Light: Story<UserProfileProps> = Template.bind({});

export const Dark: Story<UserProfileProps> = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];