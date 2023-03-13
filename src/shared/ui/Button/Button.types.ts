import { HTMLAttributes } from "react";

import { ValueOf } from "shared/lib/types/helpersTypes";

export const ButtonTheme = {
    CLEAR: "clear",
    CLEAR_INVERTED: "clear_inverted",
    FILL: "fill",
    OUTLINE: "outline",
    OUTLINE_RED: "outline_red",
    BACKGROUND: "background",
    BACKGROUND_INVERTED: "background_inverted",
} as const;

export type ButtonTheme = ValueOf<typeof ButtonTheme>;

export const ButtonSize = {
    M: "size_m",
    L: "size_l",
    XL: "size_xl",
} as const;

export type ButtonSize = ValueOf<typeof ButtonSize>;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}
