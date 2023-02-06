import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routesConfig } from "../config/routesConfig";

export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                {routesConfig.map((route) => (
                    <Route {...route} key={route.id} />
                ))}
            </Routes>
        </Suspense>
    );
};
