import { RoutesConfig } from "./routesConfig.types";

import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";
import { NotFoundPage } from "pages/NotFound";
import { ProfilePage } from "pages/Profile";
import { PathRoutes } from "shared/config/router/pathRoutes";

export const routesConfig: RoutesConfig = {
    [PathRoutes.MAIN]: {
        id: 1,
        path: PathRoutes.MAIN,
        element: <MainPage />,
    },
    [PathRoutes.ABOUT]: {
        id: 2,
        path: PathRoutes.ABOUT,
        element: <AboutPage />,
    },
    [PathRoutes.PROFILE]: {
        id: 3,
        path: PathRoutes.PROFILE,
        element: <ProfilePage />,
    },
    // last
    [PathRoutes.NOT_FOUND]: {
        id: 0,
        path: PathRoutes.NOT_FOUND,
        element: <NotFoundPage />,
    },
};
