import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type AppLinkTheme =
    | "primary"
    | "primary_inverted"
    | "secondary"
    | "secondary_inverted"
    | "outline";

interface AppLinkSharedProps extends LinkProps {
    theme?: AppLinkTheme;
}

export interface AppLinkProps extends Omit<AppLinkSharedProps, "children"> {
    text: string;
}

export interface AppLinkWrapperProps extends AppLinkSharedProps {
    children?: ReactNode;
}
