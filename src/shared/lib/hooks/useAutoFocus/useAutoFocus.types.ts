import { MutableRefObject } from "react";

export interface UseAutoFocusReturns {
    ref: MutableRefObject<HTMLInputElement | null>;
}

export type UseAutoFocus = () => UseAutoFocusReturns;
