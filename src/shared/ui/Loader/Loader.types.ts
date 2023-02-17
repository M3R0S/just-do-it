import { ValueOf } from "shared/lib/types/helpersTypes";

export const LoaderTheme = {
    STANDART: "standart",
} as const;

export type LoaderTheme = ValueOf<typeof LoaderTheme>;

export interface LoaderProps {
    theme?: LoaderTheme;
    className?: string;
}
