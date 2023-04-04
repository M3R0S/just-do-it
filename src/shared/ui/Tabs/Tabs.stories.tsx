import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { TabItem, TabsProps } from "./Tabs.types";
import { Tabs } from "./Tabs";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Tabs",
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

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
};

export const Dark: Story<TabsProps> = Template.bind({});
Dark.args = {
    tabs,
    value: "tab 2",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
