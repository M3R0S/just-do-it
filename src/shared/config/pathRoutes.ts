import { ValueOf } from "shared/lib/types";

export const PathRoutes = {
    MAIN: "/",
    ABOUT: "/about",
    NOT_FOUND: "*",
} as const;

export type PathRoutes = ValueOf<typeof PathRoutes>;
