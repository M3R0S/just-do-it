import { LinkProps } from "react-router-dom";
import { ValueOf } from "shared/lib/types/helpersTypes";

export const AppLinkTheme = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
} as const;

export type AppLinkTheme = ValueOf<typeof AppLinkTheme>;

export interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
}
