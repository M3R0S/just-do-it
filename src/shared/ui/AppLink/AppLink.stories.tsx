import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { AppLinkProps } from "./AppLink.types";
import { AppLink } from "./AppLink";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "shared/AppLink",
    component: AppLink,
    args: {
        to: "/",
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary: Story<AppLinkProps> = Template.bind({});
Primary.args = {
    text: "Text",
    theme: "primary",
};

export const PrimaryDark: Story<AppLinkProps> = Template.bind({});
PrimaryDark.args = {
    text: "Text",
    theme: "primary",
};
PrimaryDark.decorators = [ThemeDecorator("dark")];

export const Secondary: Story<AppLinkProps> = Template.bind({});
Secondary.args = {
    text: "Text",
    theme: "secondary",
};

export const SecondaryDark: Story<AppLinkProps> = Template.bind({});
SecondaryDark.args = {
    text: "Text",
    theme: "secondary",
};
SecondaryDark.decorators = [ThemeDecorator("dark")];
