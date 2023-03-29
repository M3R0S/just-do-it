import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ArticlesDisplaySchema } from "../types/articlesDisplaySchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";

import { Article, ArticleView } from "entities/Article";
import { LOCALSTORAGE_ARTICLES_VIEW_KEY } from "shared/lib/constants/localStorage";

export const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

const initialState = articlesAdapter.getInitialState<ArticlesDisplaySchema>({
    entities: {},
    ids: [],
    isLoading: false,
    view: "list",
    error: undefined,
});

export const articlesDisplaySlice = createSlice({
    name: "articlesDisplay",
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCALSTORAGE_ARTICLES_VIEW_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(LOCALSTORAGE_ARTICLES_VIEW_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false;
            articlesAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const articlesDisplayActions = articlesDisplaySlice.actions;
export const articlesDisplayReducer = articlesDisplaySlice.reducer;
