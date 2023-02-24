import { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { cln } from "shared/lib/helpers";
import { useBooleanCallback } from "shared/lib/hooks";
import { Button, ButtonTheme, Modal } from "shared/ui";

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
            <Modal
                isOpened={isAuthModal}
                onClose={onCloseModal}
            >
                {
                    // eslint-disable-next-line i18next/no-literal-string
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,repellendus?"
                }
            </Modal>
        </header>
    );
};
