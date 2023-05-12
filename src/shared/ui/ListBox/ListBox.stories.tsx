import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ListBoxProps } from "./ListBox.types";
import { MemoListBox } from "./ListBox";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/ListBox",
    component: MemoListBox,
} as ComponentMeta<typeof MemoListBox>;

const Template: ComponentStory<typeof MemoListBox> = (args) => <MemoListBox {...args} />;

export const Light: Story<ListBoxProps<string>> = Template.bind({});
Light.args = {
};

export const Dark: Story<ListBoxProps<string>> = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator("dark")];