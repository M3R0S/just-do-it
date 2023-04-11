import { useContext } from "react";

import { UseTheme } from "./useTheme.types";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../../context/ThemeContext";

export const useTheme: UseTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const nextTheme: Record<Theme, Theme> = {
        light: "dark",
        dark: "light"
    }

    const toggleTheme = () => {
        const newTheme = nextTheme[theme]
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    document.body.className = `${theme}_theme`;
    return { theme, toggleTheme };
};
