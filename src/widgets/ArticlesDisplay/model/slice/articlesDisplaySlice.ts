import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ArticlesDisplaySchema } from "../types/articlesDisplaySchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";

import { StateSchema } from "app/providers/Store";
import { Article, ArticleView } from "entities/Article";
import { LOCALSTORAGE_ARTICLES_VIEW_KEY } from "shared/lib/constants/localStorage";

export const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticlesData = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesDisplay || articlesAdapter.getInitialState()
);

const initialState = articlesAdapter.getInitialState<ArticlesDisplaySchema>({
    entities: {},
    ids: [],
    isLoading: false,
    view: "list",
    error: undefined,
    page: 1,
    hasMore: true,
    _inited: false,
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
            const view = localStorage.getItem(LOCALSTORAGE_ARTICLES_VIEW_KEY) as ArticleView;
            state.view = view;
            state.limit = view === "list" ? 3 : 9;
            state._inited = true;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false;
            articlesAdapter.addMany(state, action.payload);
            state.hasMore = action.payload.length > 0;
        });
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const articlesDisplayActions = articlesDisplaySlice.actions;
export const articlesDisplayReducer = articlesDisplaySlice.reducer;
