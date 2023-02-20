import { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { cln } from "shared/lib/helpers";
import { AppLink } from "shared/ui";
import { ButtonError } from "shared/ui/ErrorBoundary/ButtonError";

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <header className={cln(cl.navbar, [className])}>
            <nav className={cl.links}>
                <AppLink theme="primary_inverted" to="/" className={cl.link}>
                    {t("Main")}
                </AppLink>
                <AppLink
                    theme="primary_inverted"
                    to="/about"
                    className={cl.link}
                >
                    {t("About us")}
                </AppLink>
                <ButtonError />
            </nav>
        </header>
    );
};
