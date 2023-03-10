import { ValueOf } from "shared/lib/types/helpersTypes";

export const PathRoutes = {
    MAIN: "/",
    ABOUT: "/about",
    PROFILE: "/profile",
    // last
    NOT_FOUND: "*",
} as const;

export type PathRoutes = ValueOf<typeof PathRoutes>;
