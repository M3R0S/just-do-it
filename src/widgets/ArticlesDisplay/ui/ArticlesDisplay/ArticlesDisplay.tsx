import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

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
import { initArticleList } from "../../model/services/initArticleList/initArticleList";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";

import { ArticlesSorted, getArticlesSortedView } from "features/ArticlesSorted";
import { ArticleList } from "entities/Article";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { VStack } from "shared/ui/Stack";

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
    const view = useSelector(getArticlesSortedView);

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
        <VStack
            rowGap="32"
            className={className}
        >
            <ArticlesSorted
                requestUpdate={requestUpdate}
                returnToFirstPage={returnToFirstPage}
            />
            <ArticleList
                view={view}
                articles={articles}
                isLoading={isLoading}
            />
        </VStack>
    );
});
