import { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./AboutPage.module.scss";

const AboutPage: FC = () => {
    const { t } = useTranslation("aboutPage");

    return <div className={cl.main}>{t("About Page")}</div>;
};

export default AboutPage;
