import { FC } from "react";

import cl from './Button.module.scss'
import { ButtonProps } from "./Button.types";

import { cln } from "shared/lib";

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = "clear", ...otherProps } = props;

    return (
        <button className={cln(cl.button, [className, cl[theme]])} {...otherProps}>
            {children}
        </button>
    );
};