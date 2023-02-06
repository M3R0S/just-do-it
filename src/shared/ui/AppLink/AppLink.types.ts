import { LinkProps } from "react-router-dom";

export type AppLinkTheme =
    | "primary"
    | "primary-inverted"
    | "secondary"
    | "secondary-inverted";

export interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
}
