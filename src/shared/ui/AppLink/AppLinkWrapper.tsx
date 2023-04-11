import { FC } from "react";
import { Link } from "react-router-dom";

import cl from "./AppLink.module.scss";
import { AppLinkWrapperProps } from "./AppLink.types";

import { cln } from "shared/lib/helpers/classNames";

export const AppLinkWrapper: FC<AppLinkWrapperProps> = (props) => {
    const { to, className, children, theme = "primary", ...otherProps } = props;

    return (
        <Link
            to={to}
            className={cln(cl.app_link, [className, cl[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};