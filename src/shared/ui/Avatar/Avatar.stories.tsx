import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { AvatarProps } from "./Avatar.types";
import { Avatar } from "./Avatar";

import AvatarImage from "shared/assets/tests/storybook_avatar.jpg";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Avatar",
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Light: Story<AvatarProps> = Template.bind({});
Light.args = {
    width: 150,
    height: 150,
    src: AvatarImage,
};

export const Dark: Story<AvatarProps> = Template.bind({});
Dark.args = {
    width: 150,
    height: 150,
    src: AvatarImage,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightSmall: Story<AvatarProps> = Template.bind({});
LightSmall.args = {
    width: 50,
    height: 50,
    src: AvatarImage,
};

export const DarkSmall: Story<AvatarProps> = Template.bind({});
DarkSmall.args = {
    width: 50,
    height: 50,
    src: AvatarImage,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
