import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { SelectProps } from "./Select.types";
import { Select } from "./Select";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Select",
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light: Story<SelectProps> = Template.bind({});
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

export const Dark: Story<SelectProps> = Template.bind({});
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
Dark.decorators = [ThemeDecorator(Theme.DARK)];
