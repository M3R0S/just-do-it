import { FC } from "react";

import cl from './LoginForm.module.scss'
import { LoginFormProps } from "./LoginForm.types";

import { cln } from "shared/lib/helpers";

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;

    return (
        <div className={cln(cl.loginform, [className])}>
            
        </div>
    );
};