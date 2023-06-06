import cl from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

import { cln, Mods } from "shared/lib/helpers/classNames";

export const Button = (props: ButtonProps) => {
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
