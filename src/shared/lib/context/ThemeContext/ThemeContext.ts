import { createContext } from "react";

import { ThemeContextProps } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = "theme";

//todo Вынести контекст в редакс