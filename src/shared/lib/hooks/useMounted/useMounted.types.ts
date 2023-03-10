import { AnimationEvent } from "react";

export interface UseMountedParams {
    isActive?: boolean;
}

export type HandleAnimationEnd = (animationName: string) => (e: AnimationEvent) => void;

export interface UseMountedReturns {
    isMounted?: boolean;
    unmounted: VoidFunction;
    handleAnimationEnd: HandleAnimationEnd;
}

export type UseMounted = (params: UseMountedParams) => UseMountedReturns;
