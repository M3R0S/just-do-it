import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import NotFoundPage from "./NotFoundPage";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Light: Story = Template.bind({});
Light.decorators = [StoreDecorator({ scroll: { scroll: { page: 0 } } })];

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ scroll: { scroll: { page: 0 } } })];
