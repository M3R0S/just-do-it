import { FC, memo, useCallback, useMemo } from "react";

import cl from "./ArticleList.module.scss";
import { Article } from "../../model/types/article";
import { ArticleListProps } from "./ArticleList.types";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import { cln } from "shared/lib/helpers/classNames";

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const { className, articles, isLoading, view = "tile" } = props;

    const renderArticle = useCallback(
        (article: Article) => (
            <ArticleListItem
                key={article.id}
                article={article}
                view={"list"}
            />
        ),
        []
    );

    const articlesList = useMemo(() => articles.map(renderArticle), [articles, renderArticle]);

    if (!articles.length) {
        return <div className={cln(cl.article_list, [className])}>Статей нет</div>;
    }

    return <div className={cln(cl.article_list, [className, cl[view]])}>{articlesList}</div>;
});
