import { ValueOf } from "shared/lib/types/helpersTypes";

export const Theme = {
    LIGHT: "app_light_theme",
    DARK: "app_dark_theme",
} as const;

export type Theme = ValueOf<typeof Theme>;

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
