import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import cl from "./ArticleDetailsPage.module.scss";

import { CommentsForArticle } from "widgets/CommentsForArticle";
import { Page } from "widgets/Page";
import { ArticleRecommendationsList } from "widgets/ArticleRecomendationsList";
import { ArticleDetailsDisplay } from "widgets/ArticleDetailsDisplay";
import { VStack } from "shared/ui/Stack";

const ArticleDetailsPage: FC = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div className={cl.article_details_page}>{t("Article not found")}</div>;
    }

    return (
        <Page className={cl.article_details_page}>
            <VStack rowGap="16">
                <ArticleDetailsDisplay id={id} />
                <ArticleRecommendationsList />
                <CommentsForArticle id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
