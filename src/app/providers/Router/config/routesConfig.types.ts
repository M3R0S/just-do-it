import { RouteProps } from "react-router-dom";
import { PathRoutes } from "shared/config/pathRoutes";

interface RoutePropsWithId extends RouteProps {
    readonly id: number;
}

export type RoutesConfig = Record<PathRoutes, RoutePropsWithId>;
