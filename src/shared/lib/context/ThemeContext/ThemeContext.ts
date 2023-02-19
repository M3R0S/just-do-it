import { createContext } from "react";

import { ThemeContextProps } from "./ThemeContext.types";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<ThemeContextProps>({});

// //todo Вынести контекст в редакс
