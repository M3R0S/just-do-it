import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { SidebarLinkProps } from "./SidebarLink.types";
import { SidebarLink } from "./SidebarLink";
import { SidebarLinkItem } from "../Sidebar/Sidebar.types";

import LinkHomeSvg from "shared/assets/svg/link_home.svg";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widgets/Sidebar/SidebarLink",
    component: SidebarLink,
} as ComponentMeta<typeof SidebarLink>;

const Template: ComponentStory<typeof SidebarLink> = (args) => <SidebarLink {...args} />;

const item: SidebarLinkItem = {
    id: "",
    path: "/",
    text: "Main",
    Icon: LinkHomeSvg,
};

export const Light: Story<SidebarLinkProps> = Template.bind({});
Light.args = {
    collapsed: false,
    item,
};
Light.decorators = [StoreDecorator({ user: { authData: {} } })];

export const Dark: Story<SidebarLinkProps> = Template.bind({});
Dark.args = {
    collapsed: false,
    item,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];
