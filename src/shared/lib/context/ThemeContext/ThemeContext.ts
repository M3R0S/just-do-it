import { createContext, useMemo, useState } from "react";

import { Theme, ThemeContextProps } from "./ThemeContext.types";

export const LOCAL_STORAGE_THEME_KEY = "theme";

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const [theme, setTheme] = useState<Theme>(defaultTheme);

export const defaultProviderValue = useMemo<ThemeContextProps>(
    () => ({
        theme,
        setTheme,
    }),
    [theme]
);

export const ThemeContext = createContext(defaultProviderValue);


// //todo Вынести контекст в редакс

// export const ThemeContext = createContext("value");
