import { HTMLAttributes } from "react";

export type TextTheme = "clear" | "error" | "inverted";

export type TextTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextAlign = "left" | "center" | "right";

export type TextSize = "size_m" | "size_l" | "size_xl";

export type TextAttributes = HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>;

export interface TextProps extends Omit<TextAttributes, "children"> {
    text?: string;
    isTitle?: boolean;
    tag?: TextTag;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}
