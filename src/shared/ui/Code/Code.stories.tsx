import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { CodeProps } from "./Code.types";
import { Code } from "./Code";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "shared/Code",
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

const code = `<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;`;

export const Light: Story<CodeProps> = Template.bind({});
Light.args = {
    text: code,
};

export const Dark: Story<CodeProps> = Template.bind({});
Dark.args = {
    text: code,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
