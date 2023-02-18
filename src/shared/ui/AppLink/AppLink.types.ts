import { LinkProps } from "react-router-dom";
import { ValueOf } from "shared/lib/types/helpersTypes";

export const AppLinkTheme = {
    PRIMARY: "primary",
    PRIMARY_INVERTED: "primary-inverted",
    SECONDARY: "secondary",
    SECONDARY_INVERTED: "secondary-inverted",
} as const;

export type AppLinkTheme = ValueOf<typeof AppLinkTheme>;

export interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
}
