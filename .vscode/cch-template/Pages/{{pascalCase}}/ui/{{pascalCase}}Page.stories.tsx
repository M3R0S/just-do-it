import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import {{pascalCase}}Page from "./{{pascalCase}}Page";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "pages/{{pascalCase}}Page",
    component: {{pascalCase}}Page,
} as ComponentMeta<typeof {{pascalCase}}Page>;

const Template: ComponentStory<typeof {{pascalCase}}Page> = (args) => <{{pascalCase}}Page {...args} />;

export const Light: Story = Template.bind({});

export const Dark: Story = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];