import { createElement, FC, memo } from "react";

import cl from "./Text.module.scss";
import { TextAttributes, TextProps, TextSize } from "./Text.types";

import { cln, Mods } from "shared/lib/helpers/classNames";

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        text,
        tag = "span",
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

    const newProps: TextAttributes = {
        className: cln(cl.title_and_text, [cl[theme], cl[align], cl[actualSize], className], mods),
        ...otherProps,
    };

    return createElement(tag, { ...newProps }, text);
});
