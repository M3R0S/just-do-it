import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./MainPage.module.scss";

import { Page } from "widgets/Page";

const MainPage: FC = memo(() => {
    const { t } = useTranslation("mainPage");

    return <Page className={cl.main}>{t("Main Page")}</Page>;
});

export default MainPage;
