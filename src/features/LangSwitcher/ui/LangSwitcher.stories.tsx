import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { LangSwitcher } from "./LangSwitcher";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/LangSwitcher",
    component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Light: Story = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.DARK)];

export const Dark: Story = Template.bind({});
