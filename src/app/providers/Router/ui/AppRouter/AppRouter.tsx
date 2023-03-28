import { FC, memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import cl from "./AppRouter.module.scss";
import { routesConfig } from "../../config/routesConfig";
import { AppRouteProps } from "../../config/routesConfig.types";
import { RequireAuth } from "../RequireAuth/RequireAuth";

import { Loader } from "shared/ui/Loader";

export const AppRouter: FC = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const { path, routeId, element, authOnly } = route;

        const component = (
            <Suspense fallback={<Loader className={cl.loader} />}>
                <main className={cl.page_wrapper}>{element}</main>
            </Suspense>
        );

        return (
            <Route
                element={authOnly ? <RequireAuth>{component}</RequireAuth> : component}
                path={path}
                key={routeId}
            />
        );
    }, []);

    return <Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>;
});
