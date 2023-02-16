import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { ButtonTheme } from "./Button.types";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR,
};

export const Reboot = Template.bind({});
Reboot.args = {
    children: "Text",
    theme: ButtonTheme.REBOOT,
};

export const Outline = Template.bind({});
Outline.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
};
