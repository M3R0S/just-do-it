import { FC, useMemo, useState } from "react";

import { ThemeProviderProps } from "./ThemeProvider.types";

import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
    ThemeContextProps,
} from "shared/lib/context/ThemeContext";

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children } = props;

    // const defaultTheme =
    //     (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider