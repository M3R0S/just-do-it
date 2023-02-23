import { FC } from "react";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { cln } from "shared/lib/helpers";
import { ButtonError } from "shared/ui/ErrorBoundary/ButtonError";
import { Button, Modal } from "shared/ui";
import { useTranslation } from "react-i18next";
import { useBooleanCallback } from "shared/lib/hooks";

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
                {/* <ButtonError /> */}
                <Button
                    theme="clear_inverted"
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
