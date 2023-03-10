import { FC, memo } from "react";

import cl from "./Text.module.scss";
import { TextAttributes, TextProps, TextTagRecord } from "./Text.types";

import { cln } from "shared/lib/helpers/classNames";

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        children,
        tag = "span",
        theme = "clear",
        isTitle = false,
        align = "left",
    } = props;

    const newProps: TextAttributes = {
        className: cln(cl[isTitle ? "title" : "text"], [cl[theme], cl[align], className], {}),
    };

    const textTagAccordance: TextTagRecord = {
        span: <span {...newProps}>{children}</span>,
        p: <p {...newProps}>{children}</p>,
        h1: <h1 {...newProps}>{children}</h1>,
        h2: <h2 {...newProps}>{children}</h2>,
        h3: <h3 {...newProps}>{children}</h3>,
        h4: <h4 {...newProps}>{children}</h4>,
        h5: <h5 {...newProps}>{children}</h5>,
        h6: <h6 {...newProps}>{children}</h6>,
    };

    const element = textTagAccordance[tag];

    return element;
});
