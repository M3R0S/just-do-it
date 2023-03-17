import { HTMLAttributes, ReactElement } from "react";

import { ValueOf } from "shared/lib/types/helpersTypes";

export const TextTheme = {
    CLEAR: "clear",
    ERROR: "error",
} as const;

export const TextTag = {
    SPAN: "span",
    P: "p",
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
} as const;

export const TextAlign = {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right",
} as const;

export type TextTag = ValueOf<typeof TextTag>;
export type TextTheme = ValueOf<typeof TextTheme>;
export type TextAlign = ValueOf<typeof TextAlign>;
export type TextSize = "size_m" | "size_l" | "size_xl";

export type TextTagRecord = Record<
    TextTag,
    ReactElement<HTMLSpanElement | HTMLParagraphElement | HTMLElement>
>;
export type TextAttributes = HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>;

export interface TextProps extends TextAttributes {
    isTitle?: boolean;
    tag?: TextTag;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}
