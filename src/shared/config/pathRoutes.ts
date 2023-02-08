import { ValueOf } from "shared/lib/types";

export const PathRoutes = {
    MAIN: "/",
    ABOUT: "/about",
} as const;

export type PathRoutes = ValueOf<typeof PathRoutes>;
