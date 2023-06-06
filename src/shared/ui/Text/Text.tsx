import { FC } from "react";

import cl from "./Text.module.scss";
import { TextProps, TextSize } from "./Text.types";

import { cln, Mods } from "shared/lib/helpers/classNames";

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        children,
        Tag = "span",
        theme = "clear",
        isTitle = false,
        align = "left",
        size,
        ...otherProps
    } = props;

    const defaultSize: TextSize = isTitle ? "l" : "m";
    const actualSize: TextSize = size ? size : defaultSize;

    const mods: Mods = {
        [cl.title]: isTitle,
        [cl.text]: !isTitle,
    };

    return (
        <Tag
            className={cln(
                cl.title_and_text,
                [cl[theme], cl[align], cl[actualSize], className],
                mods
            )}
            {...otherProps}
        >
            {children}
        </Tag>
    );
};
