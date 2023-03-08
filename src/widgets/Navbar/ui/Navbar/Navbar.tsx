import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button";

export const Navbar: FC<NavbarProps> = memo((props) => {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);

    const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false);

    const onOpenModal = useCallback(() => {
        setIsOpenedModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsOpenedModal(false);
    }, []);

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
                isOpened={isOpenedModal}
                onClose={onCloseModal}
            />
        </header>
    );
});
