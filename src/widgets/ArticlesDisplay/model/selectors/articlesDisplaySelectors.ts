import { createSelector } from "@reduxjs/toolkit";

import { articlesAdapter } from "../slice/articlesDisplaySlice";

import { StateSchema } from "app/providers/Store";

export const getArticles = (state: StateSchema) => state.articlesDisplay;

export const getArticlesData = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesDisplay ?? articlesAdapter.getInitialState()
);

export const getArticlesIsLoading = createSelector(
    getArticles,
    (article) => article?.isLoading ?? false
);

export const getArticlesError = createSelector(getArticles, (article) => article?.error);

export const getArticlesView = createSelector(getArticles, (article) => article?.view ?? "list");
