import { FC, memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import cl from "./ArticleDetailsPage.module.scss";

import { CommentsForArticle } from "widgets/CommentsForArticle";
import { Page } from "widgets/Page";
import { ArticleRecommendationsList } from "widgets/ArticleRecomendationsList";
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
        <Page className={cl.article_details_page}>
            <Button
                onClick={onBackToList}
                theme="outline"
            >
                {t("Back to the list")}
            </Button>
            <ArticleDetails id={id} />
            <ArticleRecommendationsList />
            <CommentsForArticle id={id} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
