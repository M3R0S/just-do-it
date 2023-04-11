import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { SelectProps } from "./Select.types";
import { MemoSelect } from "./Select";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "shared/Select",
    component: MemoSelect,
} as ComponentMeta<typeof MemoSelect>;

const Template: ComponentStory<typeof MemoSelect> = (args) => <MemoSelect {...args} />;

export const Light: Story<SelectProps<string>> = Template.bind({});
Light.args = {
    label: "value",
    options: [
        {
            value: "123",
            content: "first",
        },
        {
            value: "1234",
            content: "second",
        },
    ],
};

export const Dark: Story<SelectProps<string>> = Template.bind({});
Dark.args = {
    label: "value",
    options: [
        {
            value: "123",
            content: "first",
        },
        {
            value: "1234",
            content: "second",
        },
    ],
};
Dark.decorators = [ThemeDecorator("dark")];
