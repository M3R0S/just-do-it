import { Theme } from "../../context/ThemeContext";

interface UseThemeReturned {
    theme?: Theme;
    isLightTheme: boolean;
    toggleTheme: VoidFunction;
}

export type UseTheme = () => UseThemeReturned;
