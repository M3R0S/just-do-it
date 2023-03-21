export interface UseHoverBind {
    onMouseEnter: VoidFunction;
    onMouseLeave: VoidFunction;
}

export type UseHoverReturns = [boolean, UseHoverBind];
