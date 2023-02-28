import { useEffect, useRef } from "react";

import { UseAutoFocus } from "./useAutoFocus.types";

export const useAutoFocus: UseAutoFocus = () => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setTimeout(() => {
            ref.current?.focus();
        }, 0);
    }, []);

    return { ref };
};
