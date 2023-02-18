import { createContext } from "react";

import { Theme, ThemeContextProps } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = "theme";

//todo Вынести контекст в редакс
