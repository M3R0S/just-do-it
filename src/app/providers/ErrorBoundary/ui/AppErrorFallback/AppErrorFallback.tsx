import { FC } from "react";
import { Button } from "shared/ui";

import { useTranslation } from "react-i18next";

import cl from "./AppErrorFallback.module.scss";

export const AppErrorFallback: FC = () => {
    const { t } = useTranslation();

    const reload = () => {
        window.location.reload();
    };

    return (
        <div className={cl.app_error_fallback}>
            <h1 className={cl.title}>{t("A global error has occurred")}</h1>
            <p className={cl.info}>{t("Try to reload the page")}</p>
            <Button theme="reboot" className={cl.reboot} onClick={reload}>
                {t("Reboot")}
            </Button>
        </div>
    );
};
