import { FC, memo } from "react";

import cl from "./Text.module.scss";
import { TextAttributes, TextProps, TextSize, TextTagRecord } from "./Text.types";

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

    const defaultSize: TextSize = isTitle ? "size_l" : "size_m";
    const actualSize: TextSize = size ? size : defaultSize;

    const mods: Mods = {
        [cl.title]: isTitle,
        [cl.text]: !isTitle,
    };

    const newProps: TextAttributes = {
        className: cln(cl.title_and_text, [cl[theme], cl[align], cl[actualSize], className], mods),
        ...otherProps,
    };

    const textTagAccordance: TextTagRecord = {
        span: <span {...newProps}>{text}</span>,
        p: <p {...newProps}>{text}</p>,
        h1: <h1 {...newProps}>{text}</h1>,
        h2: <h2 {...newProps}>{text}</h2>,
        h3: <h3 {...newProps}>{text}</h3>,
        h4: <h4 {...newProps}>{text}</h4>,
        h5: <h5 {...newProps}>{text}</h5>,
        h6: <h6 {...newProps}>{text}</h6>,
    };

    const element = textTagAccordance[tag];

    return element;
});
