import { RouteProps } from "react-router-dom";

export interface AppRouteProps extends RouteProps {
    readonly id: number;
    authOnly?: boolean;
}

export type AppRoutes = "main" | "about" | "profile" | "articles" | "article_details" | "not_found";

export type RoutesConfig = Record<AppRoutes, AppRouteProps>;
