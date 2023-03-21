import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
    readonly routeId: number;
    authOnly?: boolean;
};

export type AppRoutes = "main" | "about" | "profile" | "articles" | "article_details" | "not_found";

export type RoutesConfig = Record<AppRoutes, AppRouteProps>;
