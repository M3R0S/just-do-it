import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import ForbiddenPage from "./ForbiddenPage";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "pages/ForbiddenPage",
    component: ForbiddenPage,
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />;

export const Light: Story = Template.bind({});

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];