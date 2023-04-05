import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { ArticleRecommendationsListSchema } from "../types/articleRecommendationsListSchema";
import { fetchArticleRecommendationsList } from "../services/fetchArticleRecommendationsList/fetchArticleRecommendationsList";

import { StateSchema } from "app/providers/Store";
import { Article } from "entities/Article";

export const articleRecommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = articleRecommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleRecommendationsList || articleRecommendationsAdapter.getInitialState()
);

export const articleRecommendationsListSlice = createSlice({
    name: "articleRecommendationsList",
    initialState: articleRecommendationsAdapter.getInitialState<ArticleRecommendationsListSchema>({
        entities: {},
        ids: [],
        isLoading: false,
        error: undefined,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleRecommendationsList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArticleRecommendationsList.fulfilled, (state, action) => {
            state.isLoading = false;
            articleRecommendationsAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchArticleRecommendationsList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const articleRecommendationsListActions = articleRecommendationsListSlice.actions;
export const articleRecommendationsListReducer = articleRecommendationsListSlice.reducer;
