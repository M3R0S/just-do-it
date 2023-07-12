import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import AdminPanelPage from "./AdminPanelPage";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "pages/AdminPanelPage",
    component: AdminPanelPage,
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage {...args} />;

export const Light: Story = Template.bind({});

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];
