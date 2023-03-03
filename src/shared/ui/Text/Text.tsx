import { FC } from "react";

import cl from "./Text.module.scss";
import { TextAttributes, TextProps, TextTagRecord } from "./Text.types";

import { cln } from "shared/lib/helpers";

export const Text: FC<TextProps> = (props) => {
    const { className, children, tag = "span", theme = "clear" } = props;

    const newProps: TextAttributes = {
        className: cln(cl.text, [cl[theme], className]),
    };

    const textTagAccordance: TextTagRecord = {
        span: <span {...newProps}>{children}</span>,
        p: <p {...newProps}>{children}</p>,
    };

    const element = textTagAccordance[tag];

    return element;
};
