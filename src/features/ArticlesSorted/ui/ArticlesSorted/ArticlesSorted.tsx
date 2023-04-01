import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";

import cl from "./ArticlesSorted.module.scss";
import { ArticlesSortedProps } from "./ArticlesSorted.types";
import {
    articlesSortedActions,
    articlesSortedReducer,
} from "../../model/slice/articlesSortedSlice";
import { getArticlesSortedView } from "../../model/selectors/articlesSortedSelectors";
import { ArticlesSortedSelect } from "../ArticlesSortedSelect/ArticlesSortedSelect";
import { ArticlesViewSwitcher } from "../ArticlesViewSwitcher/ArticlesViewSwitcher";
import { ArticlesSortedSearch } from "../ArticlesSortedSearch/ArticlesSortedSearch";

import { ArticleList } from "entities/Article";
import { cln } from "shared/lib/helpers/classNames";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";

const reducers: ReducersList = {
    articlesSorted: articlesSortedReducer,
};

export const ArticlesSorted: FC<ArticlesSortedProps> = memo((props) => {
    const { className, articles, isLoading, requestUpdate, returnToFirstPage } = props;

    useDynamicReducerLoader({ reducers, removeAfterUnmount: false });
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesSortedView);

    useInitialEffect(
        useCallback(() => {
            dispatch(articlesSortedActions.initState());
        }, [dispatch])
    );

    return (
        <div className={cln(cl.articles_sorted, [className])}>
            <div className={cl.sorted_wrapper}>
                <ArticlesSortedSelect
                    returnToFirstPage={returnToFirstPage}
                    requestUpdate={requestUpdate}
                />
                <ArticlesViewSwitcher />
            </div>
            <ArticlesSortedSearch
                returnToFirstPage={returnToFirstPage}
                requestUpdate={requestUpdate}
            />
            <ArticleList
                view={view}
                articles={articles}
                isLoading={isLoading}
                className={cl.list}
            />
        </div>
    );
});
