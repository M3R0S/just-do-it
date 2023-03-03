import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { cln } from "shared/lib/helpers";
import { useBooleanCallback } from "shared/lib/hooks";
import { Button, ButtonTheme } from "shared/ui";

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const { value: isAuthModal, active: onOpenModal, inactive: onCloseModal } = useBooleanCallback(false);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={cln(cl.navbar, [className])}>
                <div className={cl.links}>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onLogout}
                    >
                        {t("Logout")}
                    </Button>
                </div>
            </header>
        );
    }

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
