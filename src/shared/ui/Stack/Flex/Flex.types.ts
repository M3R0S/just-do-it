import { HTMLAttributes, ReactNode } from "react";

export type FlexJustifyContent = "normal" | "start" | "center" | "end" | "space_between";
export type FlexAlignItems = "normal" | "start" | "center" | "end";
export type FlexDirection = "column" | "row";
export type FlexGap = "4" | "8" | "16" | "32";
export type FlexWrap = "nowrap" | "wrap";
export type FlexTag = "div" | "section" | "nav" | "header" | "main";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    Tag?: FlexTag;
    justifyContent?: FlexJustifyContent;
    alignItems?: FlexAlignItems;
    direction: FlexDirection;
    rowGap?: FlexGap;
    columnGap?: FlexGap;
    wrap?: FlexWrap;
    gap?: FlexGap;
    max?: boolean;
}
