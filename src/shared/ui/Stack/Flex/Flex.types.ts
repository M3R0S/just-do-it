import { ReactNode } from "react";

export type JustifyContent = "start" | "center" | "end" | "space-between";
export type FlexAlignItems = "start" | "center" | "end";
export type FlexDirection = "column" | "row";
export type FlexGap = "4" | "8" | "16" | "32";

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justifyContent?: JustifyContent;
    alignItems?: FlexAlignItems;
    direction: FlexDirection;
    rowGap?: FlexGap;
    columnGap?: FlexGap;
    gap?: FlexGap;
}
