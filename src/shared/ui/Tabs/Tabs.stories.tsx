import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { TabItem, TabsProps } from "./Tabs.types";
import { MemoTabs } from "./Tabs";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Tabs",
    component: MemoTabs,
} as ComponentMeta<typeof MemoTabs>;

const Template: ComponentStory<typeof MemoTabs> = (args) => <MemoTabs {...args} />;

const tabs: TabItem[] = [
    {
        content: "tab 1",
        value: "tab 1",
    },
    {
        content: "tab 2",
        value: "tab 2",
    },
    {
        content: "tab 3",
        value: "tab 3",
    },
];

export const Light: Story<TabsProps> = Template.bind({});
Light.args = {
    tabs,
    value: "tab 2",
    onTabClick: action("onTabClick"),
};

export const Dark: Story<TabsProps> = Template.bind({});
Dark.args = {
    tabs,
    value: "tab 2",
    onTabClick: action("onTabClick"),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
