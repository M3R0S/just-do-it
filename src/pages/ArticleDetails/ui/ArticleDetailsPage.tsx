import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import cl from "./ArticleDetailsPage.module.scss";

import { ArticleDetails } from "entities/Article";

const ArticleDetailsPage: FC = () => {
    const { t } = useTranslation("articlePage");
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div className={cl.article_details_page}>{t("Article not found")}</div>;
    }

    return (
        <div className={cl.article_details_page}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
