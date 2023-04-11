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

interface ButtonSharedProps extends HTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export interface ButtonProps extends Omit<ButtonSharedProps, "children"> {
    text: string;
}

export interface ButtonWrapperProps extends ButtonSharedProps {
    children?: ReactNode;
}
