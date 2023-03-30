import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

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
    getArticlesView,
} from "../../model/selectors/articlesDisplaySelectors";

import { initArticleList } from "widgets/ArticlesDisplay/model/services/initArticleList/initArticleList";
import { ArticleViewSwitcher } from "features/ArticleViewSwitcher";
import { ArticleList, ArticleView } from "entities/Article";
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

    const articles = useSelector(getArticlesData.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);

    useInitialEffect(
        useCallback(() => {
            dispatch(initArticleList());
        }, [dispatch])
    );

    const onViewClick = useCallback(
        (view: ArticleView) => {
            dispatch(articlesDisplayActions.setView(view));
        },
        [dispatch]
    );

    if (error) {
        return <h1>{t("Unexpected error")}</h1>;
    }

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
});
