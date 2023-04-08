import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { PathRoutes } from "shared/config/router/pathRoutes";
import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
import { AppLink } from "shared/ui/AppLink";

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
                <Text
                    isTitle
                    tag="h1"
                    theme="inverted"
                >
                    {t("Habr")}
                </Text>
                <div className={cl.links}>
                    <AppLink
                        theme="primary_inverted"
                        to={PathRoutes.ARTICLE_CREATE}
                    >
                        {t("Create an article")}
                    </AppLink>
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
