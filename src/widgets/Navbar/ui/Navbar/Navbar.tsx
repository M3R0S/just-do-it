import { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { cln } from "shared/lib";
import { AppLink } from "shared/ui";

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <header className={cln(cl.navbar, [className])}>
            <nav className={cl.links}>
                <AppLink theme="primary-inverted" to="/" className={cl.link}>
                    {t("Main")}
                </AppLink>
                <AppLink
                    theme="primary-inverted"
                    to="/about"
                    className={cl.link}
                >
                    {t("About us")}
                </AppLink>
            </nav>
        </header>
    );
};