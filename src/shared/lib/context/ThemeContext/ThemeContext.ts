import { createContext } from "react";

import { Theme, ThemeContextProps } from "./ThemeContext.types";

//@ts-ignore
export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";

//todo Вынести контекст в редакс
