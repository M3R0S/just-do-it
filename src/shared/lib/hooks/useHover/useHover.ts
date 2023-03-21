import { useCallback, useMemo, useState } from "react";

import { UseHoverReturns } from "./useHover.types";

export const useHover = (): UseHoverReturns => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    const hover: UseHoverReturns = useMemo(
        () => [
            isHover,
            {
                onMouseEnter,
                onMouseLeave,
            },
        ],
        [isHover, onMouseEnter, onMouseLeave]
    );

    return hover;
};
