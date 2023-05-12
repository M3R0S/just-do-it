import { memo } from "react";

import cl from "./Button.module.scss";
import { ButtonMemoProps, ButtonNotMemoProps } from "./Button.types";

import { cln, Mods } from "shared/lib/helpers/classNames";

const ButtonNotMemo = <T extends ButtonNotMemoProps>(props: T) => {
    const {
        className,
        theme = "clear",
        square = false,
        size = "m",
        disabled,
        children,
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

const ButtonMemo = memo<ButtonMemoProps>(ButtonNotMemo);

export const Button = Object.assign(ButtonMemo, { NotMemo: ButtonNotMemo });
