import { FC, memo } from "react";

import cl from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

import { cln, Mods } from "shared/lib/helpers/classNames";

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        theme = "clear",
        square = false,
        size = "m",
        disabled,
        text,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cl.square]: square,
    };

    return (
        <button
            {...otherProps}
            className={cln(cl.button, [className, cl[theme], cl[size]], mods)}
            disabled={disabled}
        >
            {text}
        </button>
    );
});
