import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import cl from "./ArticleRecommendationsList.module.scss";
import { ArticleRecommendationsListProps } from "./ArticleRecommendationsList.types";
import {
    articleRecommendationsListReducer,
    getArticleRecommendations,
} from "../../model/slice/articleRecommendationsListSlice";
import {
    getArticleRecommendationsListError,
    getArticleRecommendationsListIsLoading,
} from "../../model/selectors/articleRecommendationsListSelectors";
import { fetchArticleRecommendationsList } from "../../model/services/fetchArticleRecommendationsList/fetchArticleRecommendationsList";

import { ArticleList } from "entities/Article";
import { cln } from "shared/lib/helpers/classNames";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Text } from "shared/ui/Text";

const reducers: ReducersList = {
    articleRecommendationsList: articleRecommendationsListReducer,
};

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = (props) => {
    const { className } = props;

    useDynamicReducerLoader({ reducers });
    const { t } = useTranslation("articlePage");
    const dispatch = useAppDispatch();

    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const isLoading = useSelector(getArticleRecommendationsListIsLoading);
    const error = useSelector(getArticleRecommendationsListError);

    useInitialEffect(
        useCallback(() => {
            dispatch(fetchArticleRecommendationsList());
        }, [dispatch])
    );

    return (
        <div className={cln(cl.article_recomendations_list, [className])}>
            <Text
                isTitle
                tag="h1"
                size="size_l"
            >
                {t("Recommendation")}
            </Text>
            <ArticleList
                articles={recommendations}
                isLoading={isLoading}
                className={cl.list}
                target="_blank"
            />
        </div>
    );
};
