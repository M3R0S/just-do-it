import { FC, memo } from "react";

import cl from "./Button.module.scss";
import { ButtonProps, ButtonSize, ButtonTheme } from "./Button.types";

import { cln } from "shared/lib/helpers/classNames";

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        square = false,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
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
});
