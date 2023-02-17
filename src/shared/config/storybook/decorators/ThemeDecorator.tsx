import { Story } from "@storybook/react";

import { Theme } from "shared/lib/context/ThemeContext";

export const ThemeDecorator = (theme: Theme) => (Story: Story) =>
    (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
