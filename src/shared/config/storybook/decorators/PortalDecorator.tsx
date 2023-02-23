import { Story } from "@storybook/react";

import "app/App.scss";

import { Portal } from "shared/ui";

export const PortalDecorator = (Story: Story) => (
    <div className="app ">
        <Story />
    </div>
);
