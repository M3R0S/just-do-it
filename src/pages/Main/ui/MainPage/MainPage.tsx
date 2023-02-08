import { FC } from "react";

import cl from "./MainPage.module.scss";

import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
    const { t } = useTranslation("mainPage");

    return <div className={cl.main}>{t("Main Page")}</div>;
};

export default MainPage;
