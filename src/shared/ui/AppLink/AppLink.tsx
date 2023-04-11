import { FC, memo } from "react";
import { Link } from "react-router-dom";

import cl from "./AppLink.module.scss";
import { AppLinkProps } from "./AppLink.types";

import { cln } from "shared/lib/helpers/classNames";

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const { to, className, text, theme = "primary", ...otherProps } = props;

    return (
        <Link
            to={to}
            className={cln(cl.app_link, [className, cl[theme]])}
            {...otherProps}
        >
            {text}
        </Link>
    );
});
