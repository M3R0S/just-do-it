import { RoutesConfig } from "./routesConfig.types";

import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";
import { NotFoundPage } from "pages/NotFound";
import { ProfilePage } from "pages/Profile";
import { ArticlesPage } from "pages/Articles";
import { ArticleDetailsPage } from "pages/ArticleDetails";
import ArticleEditPage from "pages/ArticleEdit/ui/ArticleEdit/ArticleEditPage";
import { PathRoutes } from "shared/config/router/pathRoutes";

export const routesConfig: RoutesConfig = {
    MAIN: {
        routeId: 1,
        path: PathRoutes.MAIN,
        element: <MainPage />,
    },
    ABOUT: {
        routeId: 2,
        path: PathRoutes.ABOUT,
        element: <AboutPage />,
    },
    PROFILE: {
        routeId: 3,
        path: `${PathRoutes.PROFILE}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    ARTICLES: {
        routeId: 4,
        path: PathRoutes.ARTICLES,
        element: <ArticlesPage />,
        authOnly: true,
    },
    ARTICLE_DETAILS: {
        routeId: 5,
        path: `${PathRoutes.ARTICLE_DETAILS}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    ARTICLE_CREATE: {
        routeId: 6,
        path: PathRoutes.ARTICLE_CREATE,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    ARTICLE_EDIT: {
        routeId: 7,
        path: PathRoutes.ARTICLE_EDIT,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    // last
    NOT_FOUND: {
        routeId: 0,
        path: PathRoutes.NOT_FOUND,
        element: <NotFoundPage />,
    },
};
