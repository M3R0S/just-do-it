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
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Text } from "shared/ui/Text";
import { VStack } from "shared/ui/Stack";

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
        <VStack
            rowGap="16"
            className={className}
        >
            <Text
                isTitle
                tag="h1"
                size="l"
                text={t("Recommendation")}
            />
            <ArticleList
                articles={recommendations}
                isLoading={isLoading}
                className={cl.list}
                target="_blank"
            />
        </VStack>
    );
};
