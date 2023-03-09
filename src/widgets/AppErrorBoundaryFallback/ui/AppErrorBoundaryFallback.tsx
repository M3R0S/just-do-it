import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./AppErrorBoundaryFallback.module.scss";

import { Button, ButtonTheme } from "shared/ui/Button";

export const AppErrorBoundaryFallback: FC = memo(() => {
    const { t } = useTranslation();

    const reload = () => {
        window.location.reload();
    };

    return (
        <div className={cl.fallback}>
            <h1 className={cl.title}>{t("A global error has occurred")}</h1>
            <p className={cl.info}>{t("Try to reload the page")}</p>
            <Button
                theme={ButtonTheme.FILL}
                className={cl.reboot}
                onClick={reload}
            >
                {t("Reboot")}
            </Button>
        </div>
    );
});
