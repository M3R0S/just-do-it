import { InputHTMLAttributes, MutableRefObject } from "react";

export type InputTheme = "clear" | "inverted";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    theme?: InputTheme;
    onChangeValue?: (value: string) => void;
    isAutoFocus?: boolean;
    inputRef?: MutableRefObject<HTMLInputElement | null>;
    isReadOnly?: boolean;
}
