import { FC, memo, Suspense } from "react";

import cl from "./LoginModal.module.scss";
import { LoginModalProps } from "./LoginModal.types";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";

import { cln } from "shared/lib/helpers/classNames";
import { Modal } from "shared/ui/Modal";
import { Loader } from "shared/ui/Loader";

export const LoginModal: FC<LoginModalProps> = memo((props) => {
    const { className, isOpened, onClose } = props;

    return (
        <Modal
            isOpened={isOpened}
            onClose={onClose}
            className={cln(cl.login_modal, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
});
