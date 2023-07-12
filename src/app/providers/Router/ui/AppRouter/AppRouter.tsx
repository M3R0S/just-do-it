import { FC, memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import cl from "./AppRouter.module.scss";
import { routesConfig } from "../../config/routesConfig";
import { AppRouteProps } from "../../config/routesConfig.types";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { RequireRole } from "../RequireRole/RequireRole";

import { Loader } from "shared/ui/Loader";

export const AppRouter: FC = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const { path, routeId, element, authOnly, roles } = route;

        const component = (
            <Suspense fallback={<Loader className={cl.loader} />}>{element}</Suspense>
        );

        return (
            <Route
                element={
                    authOnly ? (
                        <RequireAuth>
                            <RequireRole roles={roles}>{component}</RequireRole>
                        </RequireAuth>
                    ) : (
                        component
                    )
                }
                path={path}
                key={routeId}
            />
        );
    }, []);

    return <Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>;
});
