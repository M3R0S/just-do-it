import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./MainPage.module.scss";

const MainPage: FC = memo(() => {
    const { t } = useTranslation("mainPage");

    return <div className={cl.main}>{t("Main Page")}</div>;
});

export default MainPage;
