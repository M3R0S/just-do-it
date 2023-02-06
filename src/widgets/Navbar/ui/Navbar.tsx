import { FC } from "react";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { ThemeSwitcher } from "features/ThemeSwitcher";
import { cln } from "shared/lib";
import { AppLink } from "shared/ui";

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
