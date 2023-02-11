import { FC } from "react";

import cl from "./AboutPage.module.scss";

import { useTranslation } from "react-i18next";

const AboutPage: FC = () => {
    const { t } = useTranslation("aboutPage");

    return <div className={cl.main}>{t("About Page")}</div>;
};

export default AboutPage;
