import { ServerEndpoints } from "shared/lib/types/serverTypes";
import { rtkApi } from "shared/api/rtkApi";

export const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
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
