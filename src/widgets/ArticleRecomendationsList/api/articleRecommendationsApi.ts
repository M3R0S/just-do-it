import { Article } from "entities/Article";
import { ServerEndpoints } from "shared/lib/types/serverTypes";
import { rtkApi } from "shared/api/rtkApi";

export const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: ServerEndpoints.ARTICLES,
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const { useGetArticleRecommendationsListQuery } = recommendationsApi;
