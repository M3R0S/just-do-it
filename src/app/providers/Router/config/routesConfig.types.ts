import { RouteProps } from "react-router-dom";

import { UserRole } from "entities/User";
import { AppRoutes } from "shared/config/router/pathRoutes";

export type AppRouteProps = RouteProps & {
    readonly routeId: number;
    authOnly?: boolean;
    roles?: UserRole[];
};

export type RoutesConfig = Record<AppRoutes, AppRouteProps>;
