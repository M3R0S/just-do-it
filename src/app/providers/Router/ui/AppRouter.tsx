import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import cl from "./AppRouter.module.scss";
import { routesConfig } from "../config/routesConfig";
import { useTranslation } from "react-i18next";

export const AppRouter: FC = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<h1>{t("Loading")}</h1>}>
            <Routes>
                {routesConfig.map(({ element, id, ...otherProps }) => (
                    <Route
                        element={
                            <main className={cl.page_wrapper}>{element}</main>
                        }
                        {...otherProps}
                        key={id}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
