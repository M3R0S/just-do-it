import { FC } from "react";

import cl from './LoginModal.module.scss'
import { LoginModalProps } from "./LoginModal.types";

import { cln } from "shared/lib/helpers";

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className } = props;

    return (
        <div className={cln(cl.loginmodal, [className])}>
            
        </div>
    );
};