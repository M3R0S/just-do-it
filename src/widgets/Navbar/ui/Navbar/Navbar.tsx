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
import { Button } from "shared/ui/Button";
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
                    text={t("Habr")}
                />
                <div className={cl.links}>
                    <AppLink
                        theme="primary_inverted"
                        to={PathRoutes.ARTICLE_CREATE}
                        text={t("Create an article")}
                    />
                    <Button
                        theme="clear_inverted"
                        onClick={onLogout}
                        text={t("Logout")}
                    />
                </div>
            </header>
        );
    }

    return (
        <header className={cln(cl.navbar, [className])}>
            <div className={cl.links}>
                <Button
                    theme={"clear_inverted"}
                    onClick={onOpenModal}
                    text={t("Log in")}
                />
            </div>
            <LoginModal
                isOpened={isOpenedModal}
                onClose={onCloseModal}
            />
        </header>
    );
});
