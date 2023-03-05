import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import cl from "./LoginForm.module.scss";
import { LoginFormProps } from "./LoginForm.types";
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from "../../model/selectors";
import { loginByUsername } from "../../model/services";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";

import { cln } from "shared/lib/helpers";
import { ReducersList, useAutoFocus, useDynamicReducerLoader } from "shared/lib/hooks";
import { TextTheme } from "shared/ui/Text/Text.types";
import { Button, ButtonTheme, Input, InputTheme, Text, Title } from "shared/ui";

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;

    useDynamicReducerLoader({ reducers: initialReducers });

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { ref } = useAutoFocus();

    const error = useSelector(getLoginError);
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);

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
                password: password,
                username: username,
            })
        );
    }, [dispatch, password, username]);

    const ErrorText = () => {
        if (error === "403") {
            return t("You have entered an incorrect username or password");
        }
        if (error === "500") {
            return t("Unexpected error");
        }

        return t("Unexpected error");
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
                {error ? ErrorText() : ""}
            </Text>
            <Input
                onChangeValue={onChangeUsername}
                value={username}
                className={cl.input}
                theme={InputTheme.INVERTED}
                placeholder={usernamePlaceholder}
                inputRef={ref}
            />
            <Input
                onChangeValue={onChangePassword}
                value={password}
                className={cl.input}
                theme={InputTheme.INVERTED}
                placeholder={passwordPlaceholder}
            />
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cl.login_btn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("Log in")}
            </Button>
        </div>
    );
};

export default LoginForm;
