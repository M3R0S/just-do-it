import { FC, memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import cl from "./ArticleDetailsPage.module.scss";

import { CommentsForArticle } from "widgets/CommentsForArticle";
import { ArticleDetails } from "entities/Article";
import { PathRoutes } from "shared/config/router/pathRoutes";
import { Button } from "shared/ui/Button";

const ArticleDetailsPage: FC = () => {
    const { t } = useTranslation("articlePage");
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(PathRoutes.ARTICLES);
    }, [navigate]);

    if (!id) {
        return <div className={cl.article_details_page}>{t("Article not found")}</div>;
    }

    return (
        <div className={cl.article_details_page}>
            <Button
                onClick={onBackToList}
                theme="outline"
            >
                {t("Back to the list")}
            </Button>
            <ArticleDetails id={id} />
            <CommentsForArticle id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
