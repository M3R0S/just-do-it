import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./NotFoundPage.module.scss";

import { Page } from "widgets/Page";

const NotFoundPage: FC = memo(() => {
    const { t } = useTranslation();

    return (
        <Page className={cl.not_found_page}>
            <h1 className={cl.title}>{t("Page not found")}</h1>
        </Page>
    );
});

export default NotFoundPage;
