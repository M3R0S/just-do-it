import { HTMLAttributes } from "react";

export type ButtonTheme = "clear";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
}
