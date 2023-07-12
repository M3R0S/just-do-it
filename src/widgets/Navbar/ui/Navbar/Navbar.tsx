import { FC, memo, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { LoginModal } from "features/AuthByUsername";
import { getIsUserAdmin, getIsUserManager, getUserAuthData, userActions } from "entities/User";
import { PathRoutes } from "shared/config/router/pathRoutes";
import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
import { AppLink } from "shared/ui/AppLink";
import { Dropdown } from "shared/ui/Menu";
import { Avatar } from "shared/ui/Avatar";
import { DropdownItem } from "shared/ui/Menu/Dropdown.types";

export const Navbar: FC<NavbarProps> = memo((props) => {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(getIsUserAdmin);
    const isManager = useSelector(getIsUserManager);

    const isAdminPanelAvalible = isAdmin || isManager;

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

    const dropDownItems = useMemo<DropdownItem[]>(
        () => [
            ...(isAdminPanelAvalible
                ? [
                      {
                          content: t("Admin Panel"),
                          href: PathRoutes.ADMIN_PANEL,
                      },
                  ]
                : []),
            {
                content: t("Pofile"),
                href: PathRoutes.PROFILE + authData?.id,
            },
            {
                content: t("Logout"),
                onClick: onLogout,
            },
        ],
        [isAdminPanelAvalible, t, authData?.id, onLogout]
    );

    if (authData) {
        return (
            <header className={cln(cl.navbar, [className])}>
                <Text
                    isTitle
                    Tag="h1"
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
                    <Dropdown
                        direction="bottom_left"
                        trigger={
                            <Avatar
                                width={30}
                                height={30}
                                src={authData.avatar}
                            />
                        }
                        items={dropDownItems}
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
