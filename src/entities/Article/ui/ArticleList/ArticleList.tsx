import { FC, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Article, ArticleView } from "../../model/types/article";
import { ArticleListProps } from "./ArticleList.types";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

import { HStack, VStack } from "shared/ui/Stack";

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const { className, articles, isLoading, view = "tile", target } = props;

    const { t } = useTranslation();

    const getSkeletons = (view: ArticleView) => {
        return new Array(view === "tile" ? 9 : 3).fill(0).map((_, index) => (
            <ArticleListItemSkeleton
                view={view}
                key={index}
            />
        ));
    };

    const renderArticle = useCallback(
        (article: Article) => (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                target={target}
            />
        ),
        [view, target]
    );

    const articlesList = useMemo(() => articles?.map(renderArticle), [articles, renderArticle]);

    if (!articles?.length && !isLoading) {
        return (
            <VStack
                justifyContent="center"
                alignItems="center"
                className={className}
            >
                {t("Статей нет")}
            </VStack>
        );
    }

    if (view === "tile") {
        return (
            <HStack
                gap="16"
                wrap="wrap"
                className={className}
            >
                {articlesList}
                {isLoading && getSkeletons(view)}
            </HStack>
        );
    }

    return (
        <VStack
            gap="16"
            className={className}
        >
            {articlesList}
            {isLoading && getSkeletons(view)}
        </VStack>
    );
});
