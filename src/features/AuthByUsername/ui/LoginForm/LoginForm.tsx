import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./LoginForm.module.scss";
import { LoginFormProps } from "./LoginForm.types";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

import { cln } from "shared/lib/helpers/classNames";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useAutoFocus } from "shared/lib/hooks/useAutoFocus";
import { Input, InputTheme } from "shared/ui/Input";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Text, TextTag, TextTheme } from "shared/ui/Text";

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className, onSuccess } = props;

    useDynamicReducerLoader({ reducers: initialReducers });

    const dispatch = useAppDispatch();
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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(
            loginByUsername({
                password: password,
                username: username,
            })
        );

        if (result.meta.requestStatus === "fulfilled") {
            onSuccess?.();
        }
    }, [dispatch, onSuccess, password, username]);

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
            <Text tag={TextTag.H1}>{t("Authorization form")}</Text>
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
});

export default LoginForm;
