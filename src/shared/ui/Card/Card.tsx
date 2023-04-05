import { FC, memo } from "react";

import cl from "./Card.module.scss";
import { CardProps } from "./Card.types";

import { cln } from "shared/lib/helpers/classNames";

export const Card: FC<CardProps> = memo((props) => {
    const { className, children, theme = "normal", ...otherProps } = props;

    return (
        <div
            className={cln(cl.card, [className, cl[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
