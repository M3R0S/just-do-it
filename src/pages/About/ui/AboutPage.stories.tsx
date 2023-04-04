import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import AboutPage from "./AboutPage";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "pages/AboutPage",
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const Light: Story = Template.bind({});
Light.decorators = [
    StoreDecorator({
        scroll: {
            scroll: {
                page: 0,
            },
        },
    }),
];

export const Dark: Story = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        scroll: {
            scroll: {
                page: 0,
            },
        },
    }),
];
