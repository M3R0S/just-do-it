import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { CountrySelectProps } from "./CountrySelect.types";
import { CountrySelect } from "./CountrySelect";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "entities/Country/CountrySelect",
    component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Light: Story<CountrySelectProps> = Template.bind({});

export const Dark: Story<CountrySelectProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
