import { useCallback, useEffect, useRef } from "react";

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
    const throttleRef = useRef<boolean>(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const throttleCallback = useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                timerRef.current = setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay]
    );

    useEffect(() => {
        () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, []);

    return throttleCallback;
};
