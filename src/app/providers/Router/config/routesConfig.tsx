import { RoutesConfig } from "./routesConfig.types";

import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";
import { NotFoundPage } from "pages/NotFound";
import { ProfilePage } from "pages/Profile";
import { ArticlesPage } from "pages/Articles";
import { ArticleDetailsPage } from "pages/ArticleDetails";
import { PathRoutes } from "shared/config/router/pathRoutes";

export const routesConfig: RoutesConfig = {
    main: {
        id: 1,
        path: PathRoutes.MAIN,
        element: <MainPage />,
    },
    about: {
        id: 2,
        path: PathRoutes.ABOUT,
        element: <AboutPage />,
    },
    profile: {
        id: 3,
        path: PathRoutes.PROFILE,
        element: <ProfilePage />,
        authOnly: true,
    },
    articles: {
        id: 4,
        path: PathRoutes.ARTICLES,
        element: <ArticlesPage />,
        authOnly: true,
    },
    article_details: {
        id: 5,
        path: PathRoutes.ARTICLE_DETAILS + ":id",
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    // last
    not_found: {
        id: 0,
        path: PathRoutes.NOT_FOUND,
        element: <NotFoundPage />,
    },
};
