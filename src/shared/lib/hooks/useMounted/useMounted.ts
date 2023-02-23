import { useEffect, useState } from "react";

import { HandleAnimationEnd, UseMounted } from "./useMounted.types";

export const useMounted: UseMounted = (params) => {
    const { isActive } = params;

    const [isMounted, setIsMounted] = useState<boolean>(isActive);

    const unmounted = () => {
        setIsMounted(false);
    };

    const handleAnimationEnd: HandleAnimationEnd = (animationName) => (e) => {
        if (animationName && e.animationName.includes(animationName)) {
            unmounted();
        }
    };

    useEffect(() => {
        if (isActive) {
            setIsMounted(true);
        }
    }, [isActive]);

    return { isMounted, unmounted, handleAnimationEnd };
};
