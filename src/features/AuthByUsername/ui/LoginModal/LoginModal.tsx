import { FC, Suspense } from "react";

import cl from "./LoginModal.module.scss";
import { LoginModalProps } from "./LoginModal.types";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";

import { cln } from "shared/lib/helpers";
import { Loader, Modal } from "shared/ui";

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpened, onClose } = props;

    return (
        <Modal
            isOpened={isOpened}
            onClose={onClose}
            className={cln(cl.login_modal, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    );
};
