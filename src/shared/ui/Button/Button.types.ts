import { HTMLAttributes, ReactNode } from "react";

export type ButtonTheme =
    | "clear"
    | "clear_inverted"
    | "fill"
    | "outline"
    | "outline_red"
    | "background"
    | "background_inverted";

export type ButtonSize = "m" | "l" | "xl";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
}
