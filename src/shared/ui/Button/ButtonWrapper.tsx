import { FC } from "react";

import cl from "./Button.module.scss";
import { ButtonWrapperProps } from "./Button.types";

import { cln, Mods } from "shared/lib/helpers/classNames";

export const ButtonWrapper: FC<ButtonWrapperProps> = (props) => {
    const {
        className,
        children,
        theme = "clear",
        square = false,
        size = "m",
        disabled,
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
            {children}
        </button>
    );
};
