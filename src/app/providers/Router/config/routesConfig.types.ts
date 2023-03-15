import { RouteProps } from "react-router-dom";

import { PathRoutes } from "shared/config/router/pathRoutes";

export interface AppRouteProps extends RouteProps {
    readonly id: number;
    authOnly?: boolean;
}

export type RoutesConfig = Record<PathRoutes, AppRouteProps>;
