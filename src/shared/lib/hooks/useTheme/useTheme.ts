import { useContext } from "react";

import { UseTheme } from "./useTheme.types";
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
} from "../../context/ThemeContext";

export const useTheme: UseTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const isLightTheme = theme === "light";

    const toggleTheme = () => {
        const newTheme = isLightTheme ? "dark" : "light";

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, isLightTheme, toggleTheme };
};
