import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import cl from "./LoginForm.module.scss";
import { LoginFormProps } from "./LoginForm.types";
import { loginActions } from "../../model/slice/loginSlice";
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from "../../model/selectors";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

import { cln } from "shared/lib/helpers";
import { useAutoFocus } from "shared/lib/hooks";
import { Button, ButtonTheme, Input, InputTheme } from "shared/ui";

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { ref } = useAutoFocus();

    const loginError = useSelector(getLoginError);
    const loginUsername = useSelector(getLoginUsername);
    const loginPassword = useSelector(getLoginPassword);
    const loginIsLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback(
        (username: string) => {
            dispatch(loginActions.setUsername(username));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (password: string) => {
            dispatch(loginActions.setPassword(password));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(
            loginByUsername({
                password: loginPassword,
                username: loginUsername,
            })
        );
    }, [dispatch, loginPassword, loginUsername]);

    const usernamePlaceholder = t("Enter the user name");
    const passwordPlaceholder = t("Enter the password");

    return (
        <div className={cln(cl.login_form, [className])}>
            <Input
                onChangeValue={onChangeUsername}
                value={loginUsername}
                className={cl.input}
                theme={InputTheme.INVERTED}
                placeholder={usernamePlaceholder}
                inputRef={ref}
            />
            <Input
                onChangeValue={onChangePassword}
                value={loginPassword}
                className={cl.input}
                theme={InputTheme.INVERTED}
                placeholder={passwordPlaceholder}
            />
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cl.login_btn}
                onClick={onLoginClick}
            >
                {t("Log in")}
            </Button>
        </div>
    );
};
