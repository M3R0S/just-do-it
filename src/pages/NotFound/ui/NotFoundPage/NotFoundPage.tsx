import { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./NotFoundPage.module.scss";

const NotFoundPage: FC = () => {
    const { t } = useTranslation("notFoundPage");

    return (
        <div className={cl.not_found_page}>
            <h1 className={cl.title}>{t("Page not found")}</h1>
        </div>
    );
};

export default NotFoundPage;
