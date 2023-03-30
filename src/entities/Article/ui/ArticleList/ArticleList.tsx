import { FC, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListProps } from "./ArticleList.types";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

import { cln } from "shared/lib/helpers/classNames";

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const { className, articles, isLoading, view = "tile" } = props;

    const { t } = useTranslation("articlePage");

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
            />
        ),
        [view]
    );

    const articlesList = useMemo(() => articles.map(renderArticle), [articles, renderArticle]);

    if (!articles.length && !isLoading) {
        return <div className={cln(cl.article_list, [className])}>{t("Статей нет")}</div>;
    }

    return (
        <div className={cln(cl.article_list, [className, cl[view]])}>
            {articlesList}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
