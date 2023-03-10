import { useEffect, useState } from "react";

import { HandleAnimationEnd, UseMounted } from "./useMounted.types";

export const useMounted: UseMounted = (params) => {
    const { isActive } = params;

    const [isMounted, setIsMounted] = useState<boolean | undefined>(isActive);

    const unmounted = () => {
        setIsMounted(false);
    };

    const handleAnimationEnd: HandleAnimationEnd = (animName) => (e) => {
        if (animName && e.animationName.includes(animName)) {
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
