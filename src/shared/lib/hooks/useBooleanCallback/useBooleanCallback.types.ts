import { Dispatch, SetStateAction } from "react";

export interface UseBooleanCallbackReturns {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    active: VoidFunction;
    inactive: VoidFunction;
    toggle: VoidFunction;
}

export type UseBooleanCallback = (defaultValue?: boolean) => UseBooleanCallbackReturns;
