import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./AboutPage.module.scss";

import { Page } from "widgets/Page";

const AboutPage: FC = memo(() => {
    const { t } = useTranslation("aboutPage");

    return <Page className={cl.main}>{t("About Page")}</Page>;
});

export default AboutPage;
