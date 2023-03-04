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
import { loginByUsername } from "../../model/services";

import { cln } from "shared/lib/helpers";
import { useAutoFocus } from "shared/lib/hooks";
import { TextTheme } from "shared/ui/Text/Text.types";
import { Button, ButtonTheme, Input, InputTheme, Text, Title } from "shared/ui";

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

    const ErrorText = () => {
        if (loginError === "403") {
            return t("You have entered an incorrect username or password");
        }
        if (loginError === "500") {
            return t("Unexpected error");
        }
    };

    const usernamePlaceholder = t("Enter the user name");
    const passwordPlaceholder = t("Enter the password");

    return (
        <div className={cln(cl.login_form, [className])}>
            <Title>{t("Authorization form")}</Title>
            <Text
                theme={TextTheme.ERROR}
                className={cl.error}
            >
                {loginError ? ErrorText() : ""}
            </Text>
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
                disabled={loginIsLoading}
            >
                {t("Log in")}
            </Button>
        </div>
    );
};
