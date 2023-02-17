import { Story } from "@storybook/react";

import "app/App.scss";

export const StyleDecorator = (Story: Story) => (
    <div>
        <Story />
    </div>
);
