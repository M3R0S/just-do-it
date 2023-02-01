import { useContext } from "react";

import { UseTheme } from ".";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../../ThemeContext";

export const useTheme: UseTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
};
