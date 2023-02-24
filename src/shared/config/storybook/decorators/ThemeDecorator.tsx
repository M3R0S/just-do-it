import { useEffect } from "react";
import { Story } from "@storybook/react";

import { Theme } from "shared/lib/context/ThemeContext";

export const ThemeDecorator = (theme: Theme) => {
    useEffect(() => {
        document.body.classList.add(theme);
        const isLight = document.body.className.includes("light");
        const isDark = document.body.className.includes("dark");

        if (isLight && isDark) {
            document.body.classList.remove("light");
        }
        console.log(theme);

        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);

    return (Story: Story) => {
        return <Story />;
    };
};
