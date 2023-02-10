import { RoutesConfig } from "./routesConfig.types";

import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";
import { NotFoundPage } from "pages/NotFound";

import { PathRoutes } from "shared/config/pathRoutes";

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
    [PathRoutes.NOT_FOUND]: {
        id: 3,
        path: PathRoutes.NOT_FOUND,
        element: <NotFoundPage />,
    },
};
