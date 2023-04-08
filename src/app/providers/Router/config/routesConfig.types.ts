import { RouteProps } from "react-router-dom";

import { AppRoutes } from "shared/config/router/pathRoutes";

export type AppRouteProps = RouteProps & {
    readonly routeId: number;
    authOnly?: boolean;
};

export type RoutesConfig = Record<AppRoutes, AppRouteProps>;
