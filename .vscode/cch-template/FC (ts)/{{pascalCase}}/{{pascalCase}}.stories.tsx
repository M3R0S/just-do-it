import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { {{pascalCase}}Props } from "./{{pascalCase}}.types";
import { {{pascalCase}} } from "./{{pascalCase}}";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "/{{pascalCase}}",
    component: {{pascalCase}},
} as ComponentMeta<typeof {{pascalCase}}>;

const Template: ComponentStory<typeof {{pascalCase}}> = (args) => <{{pascalCase}} {...args} />;

export const Light: Story<{{pascalCase}}Props> = Template.bind({});

export const Dark: Story<{{pascalCase}}Props> = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];