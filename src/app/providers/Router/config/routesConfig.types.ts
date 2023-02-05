import { RouteProps } from "react-router-dom";

interface RoutePropsWithId extends RouteProps {
    readonly id: number
}

export type RoutesConfig = RoutePropsWithId[]
