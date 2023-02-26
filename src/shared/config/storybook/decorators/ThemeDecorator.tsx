import { Story } from "@storybook/react";

import { ThemeProvider } from "app/providers/Theme";
import { Theme } from "shared/lib/context/ThemeContext";
import { cln } from "shared/lib/helpers";

export const ThemeDecorator = (theme: Theme) => {
    return (Story: Story) => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={cln("app", [theme])}>
                    <Story />
                </div>
            </ThemeProvider>
        );
    };
};
