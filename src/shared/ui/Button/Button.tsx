import { FC } from "react";

import cl from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

import { cln } from "shared/lib/helpers";

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = "clear",
        square = false,
        size = "size_m",
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cl.square]: square,
    };

    return (
        <button
            {...otherProps}
            className={cln(cl.button, [className, cl[theme], cl[size]], mods)}
        >
            {children}
        </button>
    );
};
