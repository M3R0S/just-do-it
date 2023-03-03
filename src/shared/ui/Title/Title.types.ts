import { HTMLAttributes, ReactElement } from "react";

import { ValueOf } from "shared/lib/types/helpersTypes";

export const TitleTheme = {
    CLEAR: "clear",
    ERROR: "error",
} as const;

export const TitleTag = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
} as const;

export type TitleTag = ValueOf<typeof TitleTag>;
export type TitleTheme = ValueOf<typeof TitleTheme>;

export type TitleTagRecord = Record<TitleTag, ReactElement<HTMLHeadingElement>>;
export type TitleAttributes = HTMLAttributes<HTMLHeadingElement>;

export interface TitleProps extends TitleAttributes {
    tag?: TitleTag;
    theme?: TitleTheme;
}
