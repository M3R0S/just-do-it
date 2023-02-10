import { lazy } from "react";

export const {{pascalCase}}PageLazy = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import("./{{pascalCase}}Page")), 1500);
        })
);
