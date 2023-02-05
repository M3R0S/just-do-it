import { FC } from "react";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";
import { cln } from "shared/lib/classNames";
import { AppLink } from "shared/ui/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <header className={cln(cl.navbar, [className])}>
            <ThemeSwitcher />
            <nav className={cl.links}>
                <AppLink theme="primary-inverted" to="/">
                    Главная
                </AppLink>
                <AppLink theme="primary-inverted" to="/about">
                    О сайте
                </AppLink>
            </nav>
        </header>
    );
};
