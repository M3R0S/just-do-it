import { MutableRefObject } from "react";

export interface UseInfiniteScrollParams<T extends HTMLElement, W extends HTMLElement> {
    callback?: VoidFunction;
    triggerRef: MutableRefObject<T | null>;
    wrapperRef: MutableRefObject<W | null>;
}
