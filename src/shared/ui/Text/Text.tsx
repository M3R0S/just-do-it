import { FC } from "react";

import cl from "./Text.module.scss";
import { TextProps } from "./Text.types";

import { cln } from "shared/lib/helpers";

export const Text: FC<TextProps> = (props) => {
    const { className, children } = props;

    return <span className={cln(cl.text, [className])}>{children}</span>;
};
