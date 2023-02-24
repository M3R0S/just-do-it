import { createContext } from "react";

import { Theme, ThemeContextProps } from "./ThemeContext.types";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    setTheme: () => ({}),
});

// //todo Вынести контекст в редакс
