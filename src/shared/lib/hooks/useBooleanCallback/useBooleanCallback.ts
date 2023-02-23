import { useCallback, useState } from "react";

import { UseBooleanCallback } from "./useBooleanCallback.types";

export const useBooleanCallback: UseBooleanCallback = (
    defaultValue = false
) => {
    const [value, setValue] = useState<boolean>(defaultValue);

    const active = useCallback(() => {
        setValue(true);
    }, []);

    const inactive = useCallback(() => {
        setValue(false);
    }, []);

    const toggle = useCallback(() => {
        setValue((val) => !val);
    }, []);

    return { value, setValue, active, inactive, toggle };
};
