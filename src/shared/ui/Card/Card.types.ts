import { HTMLAttributes, ReactNode } from "react";

export type CardTheme = "normal" | "outline";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
}
