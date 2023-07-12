import { ValueOf } from "shared/lib/types/helpersTypes";

export const PathRoutes = {
    MAIN: "/",
    ABOUT: "/about",
    PROFILE: "/profile/", // + :id
    ARTICLES: "/articles",
    ARTICLE_DETAILS: "/articles/", // + :id
    ARTICLE_CREATE: "/articles/create",
    ARTICLE_EDIT: "/articles/:id/edit",
    ADMIN_PANEL: "/admin",
    FORBIDDEN: "/forbidden",
    // last
    NOT_FOUND: "*",
} as const;

export type PathRoutes = ValueOf<typeof PathRoutes>;

export type AppRoutes = keyof typeof PathRoutes;
