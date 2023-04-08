import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import MainPage from "./MainPage";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "pages/MainPage",
    component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Light: Story = Template.bind({});
Light.decorators = [StoreDecorator({ scroll: { scroll: { page: 0 } } })];

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ scroll: { scroll: { page: 0 } } })];
