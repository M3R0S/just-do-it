import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/Store";

export const getArticles = (state: StateSchema) => state.articlesDisplay;

export const getArticlesIsLoading = createSelector(
    getArticles,
    (article) => article?.isLoading ?? false
);
export const getArticlesError = createSelector(getArticles, (article) => article?.error);
export const getArticlesView = createSelector(getArticles, (article) => article?.view ?? "list");
export const getArticlesPageNumber = createSelector(getArticles, (article) => article?.page ?? 1);
export const getArticlesLimit = createSelector(getArticles, (article) => article?.limit ?? 9);
export const getArticlesHasMore = createSelector(getArticles, (article) => article?.hasMore);
export const getArticlesInited = createSelector(getArticles, (article) => article?._inited);
