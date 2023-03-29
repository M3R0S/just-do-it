import { FC, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import cl from "./ArticlesDisplay.module.scss";
import { ArticlesDisplayProps } from "./ArticlesDisplay.types";
import {
    articlesDisplayActions,
    articlesDisplayReducer,
} from "../../model/slice/articlesDisplaySlice";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import {
    getArticlesData,
    getArticlesIsLoading,
    getArticlesError,
    getArticlesView,
} from "../../model/selectors/articlesDisplaySelectors";

import { ArticleViewSwitcher } from "features/ArticleViewSwitcher";
import { ArticleList, ArticleView } from "entities/Article";
import { cln } from "shared/lib/helpers/classNames";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

const reducers: ReducersList = {
    articlesDisplay: articlesDisplayReducer,
};

export const ArticlesDisplay: FC<ArticlesDisplayProps> = (props) => {
    const { className } = props;

    useDynamicReducerLoader({ reducers: reducers });
    const dispatch = useAppDispatch();

    useInitialEffect(
        useCallback(() => {
            dispatch(fetchArticlesList({ page: 1 }));
            dispatch(articlesDisplayActions.initState());
        }, [dispatch])
    );

    const articles = useSelector(getArticlesData.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);

    const onViewClick = useCallback(
        (view: ArticleView) => {
            dispatch(articlesDisplayActions.setView(view));
        },
        [dispatch]
    );

    return (
        <div className={cln(cl.articles_display, [className])}>
            <ArticleViewSwitcher
                view={view}
                onViewClick={onViewClick}
            />
            <ArticleList
                view={view}
                articles={articles}
                isLoading={isLoading}
            />
        </div>
    );
};
