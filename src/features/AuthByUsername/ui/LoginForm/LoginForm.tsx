import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import cl from "./LoginForm.module.scss";
import { LoginFormProps } from "./LoginForm.types";

import { cln } from "shared/lib/helpers";
import { useAutoFocus } from "shared/lib/hooks";
import { InputTheme } from "shared/ui/Input/Input.types";
import { Button, ButtonTheme, Input } from "shared/ui";

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { t } = useTranslation();
    const { ref } = useAutoFocus();

    const usernamePlaceholder = t("Enter the user name");
    const passwordPlaceholder = t("Enter the password");

    return (
        <div className={cln(cl.login_form, [className])}>
            <Input
                onChangeValue={setUsername}
                value={username}
                className={cl.input}
                theme={InputTheme.INVERTED}
                placeholder={usernamePlaceholder}
                inputRef={ref}
            />
            <Input
                onChangeValue={setPassword}
                value={password}
                className={cl.input}
                theme={InputTheme.INVERTED}
                placeholder={passwordPlaceholder}
            />
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cl.login_btn}
            >
                {t("Log in")}
            </Button>
        </div>
    );
};
