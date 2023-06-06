import { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./ArticleRecommendationsList.module.scss";
import { ArticleRecommendationsListProps } from "./ArticleRecommendationsList.types";
import { articleRecommendationsListReducer } from "../../model/slice/articleRecommendationsListSlice";
import { useGetArticleRecommendationsListQuery } from "../../api/articleRecommendationsApi";

import { ArticleList } from "entities/Article";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { Text } from "shared/ui/Text";
import { VStack } from "shared/ui/Stack";

const reducers: ReducersList = {
    articleRecommendationsList: articleRecommendationsListReducer,
};

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = (props) => {
    const { className } = props;

    useDynamicReducerLoader({ reducers });
    const { t } = useTranslation();
    // const dispatch = useAppDispatch();

    // const recommendations = useSelector(getArticleRecommendations.selectAll);
    // const isLoading = useSelector(getArticleRecommendationsListIsLoading);
    // const error = useSelector(getArticleRecommendationsListError);

    const { isFetching, data: articles, isError } = useGetArticleRecommendationsListQuery(3);

    // useInitialEffect(
    //     useCallback(() => {
    //         dispatch(fetchArticleRecommendationsList());
    //     }, [dispatch])
    // );

    if (isError) {
        return <Text theme="error">{t("Error")}</Text>;
    }

    return (
        <VStack
            rowGap="16"
            className={className}
        >
            <Text
                isTitle
                Tag="h1"
                size="l"
            >
                {t("Recommendation")}
            </Text>
            <ArticleList
                articles={articles}
                isLoading={isFetching}
                className={cl.list}
                target="_blank"
            />
        </VStack>
    );
};
