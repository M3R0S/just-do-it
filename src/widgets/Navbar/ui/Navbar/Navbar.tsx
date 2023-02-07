import { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { cln } from "shared/lib";
import { AppLink } from "shared/ui";

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    return (
        <header className={cln(cl.navbar, [className])}>
            <nav className={cl.links}>
                <AppLink theme="primary-inverted" to="/">
                    {t("Main")}
                </AppLink>
                <AppLink theme="primary-inverted" to="/about">
                    {t("About us")}
                </AppLink>
            </nav>
        </header>
    );
};
