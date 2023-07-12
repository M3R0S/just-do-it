import { lazy } from "react";

export const AdminPanelPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import("./AdminPanelPage")), 1500);
        })
);
