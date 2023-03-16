import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/Store";

const getArticleDetails = (state: StateSchema) => state.articleDetails;

export const getArticleDetailsData = createSelector(
    getArticleDetails,
    (articleDetails) => articleDetails?.data
);

export const getArticleDetailsIsLoading = createSelector(
    getArticleDetails,
    (articleDetails) => articleDetails?.isLoading
);

export const getArticleDetailsError = createSelector(
    getArticleDetails,
    (articleDetails) => articleDetails?.error
);
