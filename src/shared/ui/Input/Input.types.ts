import { InputHTMLAttributes, MutableRefObject } from "react";

import { ValueOf } from "shared/lib/types/helpersTypes";

export const InputTheme = {
    CLEAR: "clear",
    INVERTED: "inverted",
} as const;

export type InputTheme = ValueOf<typeof InputTheme>;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    theme?: InputTheme;
    value: string;
    onChangeValue?: (value: string) => void;
    isAutoFocus?: boolean;
    inputRef?: MutableRefObject<HTMLInputElement | null>;
}
