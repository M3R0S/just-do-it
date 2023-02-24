import { ReactNode } from "react";

import { Theme } from "shared/lib/context/ThemeContext";

export interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}
