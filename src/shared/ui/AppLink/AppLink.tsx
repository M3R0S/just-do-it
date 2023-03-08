import { FC, memo } from "react";
import { Link } from "react-router-dom";

import cl from "./AppLink.module.scss";
import { AppLinkProps, AppLinkTheme } from "./AppLink.types";

import { cln } from "shared/lib/helpers/classNames";

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link
            to={to}
            className={cln(cl.app_link, [className, cl[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
