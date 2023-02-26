import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import cl from "./AppRouter.module.scss";
import { routesConfig } from "../config/routesConfig";

import { Loader } from "shared/ui";

export const AppRouter: FC = () => {
    return (
        <Routes>
            {Object.values(routesConfig).map(
                ({ element, id, ...otherProps }) => (
                    <Route
                        element={
                            <Suspense
                                fallback={<Loader className={cl.loader} />}
                            >
                                <main className={cl.page_wrapper}>
                                    {element}
                                </main>
                            </Suspense>
                        }
                        {...otherProps}
                        key={id}
                    />
                )
            )}
        </Routes>
    );
};
