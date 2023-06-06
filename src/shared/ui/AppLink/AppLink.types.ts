import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type AppLinkTheme =
    | "primary"
    | "primary_inverted"
    | "secondary"
    | "secondary_inverted"
    | "outline";

export interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
    children: ReactNode
}
