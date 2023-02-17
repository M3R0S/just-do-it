import { ValueOf } from "shared/lib/types/helpersTypes";

export const Theme = {
    LIGHT: "light",
    DARK: "dark",
} as const;

export type Theme = ValueOf<typeof Theme>;

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
