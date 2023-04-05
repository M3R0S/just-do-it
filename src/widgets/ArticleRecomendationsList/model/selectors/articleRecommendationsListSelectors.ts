import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/Store";

const getArticleRecommendationsList = (state: StateSchema) => state.articleRecommendationsList;

export const getArticleRecommendationsListIsLoading = createSelector(
    getArticleRecommendationsList,
    (list) => list?.isLoading || false
);
export const getArticleRecommendationsListError = createSelector(
    getArticleRecommendationsList,
    (list) => list?.error
);
