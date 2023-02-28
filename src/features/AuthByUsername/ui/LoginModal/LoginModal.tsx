import { FC } from "react";

import cl from "./LoginModal.module.scss";
import { LoginModalProps } from "./LoginModal.types";
import { LoginForm } from "../LoginForm/LoginForm";

import { cln } from "shared/lib/helpers";
import { Modal } from "shared/ui";

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpened, onClose } = props;

    return (
        <Modal
            isOpened={isOpened}
            onClose={onClose}
            className={cln(cl.login_modal, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
