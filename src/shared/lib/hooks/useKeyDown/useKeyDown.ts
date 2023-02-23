import { useEffect } from "react";

import { UseKeyDown } from "./useKeyDown.types";

export const useKeyDown: UseKeyDown = (params) => {
    const { action } = params;

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                action();
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [action]);
};
