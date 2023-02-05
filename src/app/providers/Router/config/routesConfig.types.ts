import { RouteProps } from "react-router-dom";

export enum PathRoutes {
    MAIN = '/',
    ABOUT = '/about',
}

interface RoutePropsWithId extends RouteProps {
    readonly id: number
}

export type RoutesConfig = RoutePropsWithId[]
