import { HTMLAttributes } from "react";
import { ValueOf } from "shared/lib/types/helpersTypes";

export const ButtonTheme = {
    CLEAR: "clear",
    REBOOT: "reboot",
    OUTLINE: "outline",
} as const;

export type ButtonTheme = ValueOf<typeof ButtonTheme>;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
}
