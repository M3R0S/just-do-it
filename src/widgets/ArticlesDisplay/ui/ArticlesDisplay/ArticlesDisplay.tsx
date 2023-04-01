import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import cl from "./ArticlesDisplay.module.scss";
import { ArticlesDisplayProps } from "./ArticlesDisplay.types";
import {
    articlesDisplayActions,
    articlesDisplayReducer,
    getArticlesData,
} from "../../model/slice/articlesDisplaySlice";
import {
    getArticlesIsLoading,
    getArticlesError,
} from "../../model/selectors/articlesDisplaySelectors";

import { initArticleList } from "widgets/ArticlesDisplay/model/services/initArticleList/initArticleList";
import { fetchArticlesList } from "widgets/ArticlesDisplay/model/services/fetchArticlesList/fetchArticlesList";
import { ArticlesSorted } from "features/ArticlesSorted";
import { cln } from "shared/lib/helpers/classNames";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

const reducers: ReducersList = {
    articlesDisplay: articlesDisplayReducer,
};

export const ArticlesDisplay: FC<ArticlesDisplayProps> = memo((props) => {
    const { className } = props;

    useDynamicReducerLoader({ reducers: reducers, removeAfterUnmount: false });
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();

    const articles = useSelector(getArticlesData.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);

    useInitialEffect(
        useCallback(() => {
            dispatch(initArticleList(searchParams));
        }, [dispatch, searchParams])
    );

    const returnToFirstPage = useCallback(() => {
        dispatch(articlesDisplayActions.setPage(1));
    }, [dispatch]);

    const requestUpdate = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    if (error) {
        return <h1>{t("Unexpected error")}</h1>;
    }

    return (
        <div className={cln(cl.articles_display, [className])}>
            <ArticlesSorted
                articles={articles}
                isLoading={isLoading}
                requestUpdate={requestUpdate}
                returnToFirstPage={returnToFirstPage}
            />
        </div>
    );
});
