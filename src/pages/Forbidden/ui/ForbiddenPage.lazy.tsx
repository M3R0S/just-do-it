import { lazy } from "react";

export const ForbiddenPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import("./ForbiddenPage")), 1500);
        })
);
