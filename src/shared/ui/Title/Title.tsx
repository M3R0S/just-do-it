import { FC, memo } from "react";

import cl from "./Title.module.scss";
import { TitleAttributes, TitleProps, TitleTagRecord } from "./Title.types";

import { cln } from "shared/lib/helpers/classNames";

export const Title: FC<TitleProps> = memo((props) => {
    const { className, children, tag = "h1", theme = "clear" } = props;

    const newProps: TitleAttributes = {
        className: cln(cl.title, [cl[theme], className]),
    };

    const titleTagAccordance: TitleTagRecord = {
        h1: <h1 {...newProps}>{children}</h1>,
        h2: <h2 {...newProps}>{children}</h2>,
        h3: <h3 {...newProps}>{children}</h3>,
        h4: <h4 {...newProps}>{children}</h4>,
        h5: <h5 {...newProps}>{children}</h5>,
        h6: <h6 {...newProps}>{children}</h6>,
    };

    const element = titleTagAccordance[tag];

    return element;
});
