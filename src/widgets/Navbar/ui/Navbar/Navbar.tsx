import { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { LoginModal } from "features/AuthByUsername";
import { cln } from "shared/lib/helpers";
import { useBooleanCallback } from "shared/lib/hooks";
import { Button, ButtonTheme } from "shared/ui";

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();
    const {
        value: isAuthModal,
        active: onOpenModal,
        inactive: onCloseModal,
    } = useBooleanCallback(false);

    return (
        <header className={cln(cl.navbar, [className])}>
            <div className={cl.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onOpenModal}
                >
                    {t("Log in")}
                </Button>
            </div>
            <LoginModal
                isOpened={isAuthModal}
                onClose={onCloseModal}
            />
        </header>
    );
};
