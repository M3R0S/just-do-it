import { RoutesConfig } from "./routesConfig.types";

import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";

import { PathRoutes } from "shared/config/routes";

export const routesConfig: RoutesConfig = [
    {
        id: 1,
        path: PathRoutes.MAIN,
        element: <MainPage />,
    },
    {
        id: 2,
        path: PathRoutes.ABOUT,
        element: <AboutPage />,
    },
];
