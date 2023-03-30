import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { PageProps } from "./Page.types";
import { Page } from "./Page";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "widgets/Page",
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Light: Story<PageProps> = Template.bind({});

export const Dark: Story<PageProps> = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
