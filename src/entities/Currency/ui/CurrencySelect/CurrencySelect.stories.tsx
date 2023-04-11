import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { CurrencySelectProps } from "./CurrencySelect.types";
import { CurrencySelect } from "./CurrencySelect";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "entities/Currency/CurrencySelect",
    component: CurrencySelect,
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Light: Story<CurrencySelectProps> = Template.bind({});

export const Dark: Story<CurrencySelectProps> = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];
