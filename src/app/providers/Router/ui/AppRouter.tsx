import { FC, memo, Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import cl from "./AppRouter.module.scss";
import { routesConfig } from "../config/routesConfig";

import { getUserAuthData } from "entities/User";
import { Loader } from "shared/ui/Loader";

export const AppRouter: FC = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routesConfig).filter(({ authOnly }) => {
            if (authOnly && !isAuth) {
                return false;
            }

            return true;
        });
    }, [isAuth]);

    return (
        <Routes>
            {routes.map(({ element, id, ...otherProps }) => (
                <Route
                    element={
                        <Suspense fallback={<Loader className={cl.loader} />}>
                            <main className={cl.page_wrapper}>{element}</main>
                        </Suspense>
                    }
                    {...otherProps}
                    key={id}
                />
            ))}
        </Routes>
    );
});
