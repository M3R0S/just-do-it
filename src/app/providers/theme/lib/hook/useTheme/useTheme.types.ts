import { Theme } from "../../ThemeContext";

interface UseThemeReturned {
    theme: Theme;
    toggleTheme: VoidFunction;
}

export type UseTheme = () => UseThemeReturned;
