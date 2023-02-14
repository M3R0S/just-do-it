import { HTMLAttributes } from "react";

export type ButtonTheme = "clear" | "reboot";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
}
