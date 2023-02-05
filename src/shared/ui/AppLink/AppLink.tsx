import { FC } from "react";

import cl from "./AppLink.module.scss";
import { AppLinkProps } from "./AppLink.types";
import { cln } from "shared/lib/classNames";
import { Link } from "react-router-dom";

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, theme = "primary", ...otherProps } = props;

    return (
        <Link to={to} className={cln(cl.app_link, [className, cl[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
