import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { AddNewCommentProps } from "./AddNewComment.types";
import AddNewComment from "./AddNewComment";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "shared/lib/context/ThemeContext";

export default {
    title: "features/AddNewComment",
    component: AddNewComment,
} as ComponentMeta<typeof AddNewComment>;

const Template: ComponentStory<typeof AddNewComment> = (args) => <AddNewComment {...args} />;

export const Light: Story<AddNewCommentProps> = Template.bind({});
Light.args = {
    onSendComment: action("onSendComment"),
};
Light.decorators = [StoreDecorator({})];

export const Dark: Story<AddNewCommentProps> = Template.bind({});
Dark.args = {
    onSendComment: action("onSendComment"),
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
