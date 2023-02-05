import { FC } from "react";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";
import { cln } from "shared/lib";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink";

export const Navbar: FC<NavbarProps> = (props) => {
    const { className = "" } = props;

    return (
        <header className={cln(cl.navbar, [className])}>
            <nav className={cl.links}>
                <AppLink theme="primary-inverted" to="/">Главная</AppLink>
                <AppLink theme="primary-inverted" to="/about">О сайте</AppLink>
            </nav>
        </header>
    );
};
