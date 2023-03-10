import { useContext } from "react";

import { UseTheme } from "./useTheme.types";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../../context/ThemeContext";

export const useTheme: UseTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const isLightTheme = theme === Theme.LIGHT;

    const toggleTheme = () => {
        const newTheme = isLightTheme ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    document.body.className = theme;
    return { theme, isLightTheme, toggleTheme };
};
