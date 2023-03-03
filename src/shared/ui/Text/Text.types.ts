import { HTMLAttributes, ReactElement } from "react";

import { ValueOf } from "shared/lib/types/helpersTypes";

export const TextTheme = {
    CLEAR: "clear",
    ERROR: "error",
} as const;

export const TextTag = {
    SPAN: "span",
    P: "p",
} as const;

export type TextTag = ValueOf<typeof TextTag>;
export type TextTheme = ValueOf<typeof TextTheme>;

export type TextTagRecord = Record<TextTag, ReactElement<HTMLSpanElement | HTMLParagraphElement>>;
export type TextAttributes = HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>;

export interface TextProps extends TextAttributes {
    tag?: TextTag;
    theme?: TextTheme;
}
