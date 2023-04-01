import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ArticlesDisplaySchema } from "../types/articlesDisplaySchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";

import { StateSchema } from "app/providers/Store";
import { Article, ArticleView } from "entities/Article";

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
    error: undefined,
    page: 1,
    limit: 9,
    hasMore: true,
    _inited: false,
});

export const articlesDisplaySlice = createSlice({
    name: "articlesDisplay",
    initialState,
    reducers: {
        initState: (state, action: PayloadAction<ArticleView>) => {
            state.limit = action.payload === "list" ? 3 : 9;
            state._inited = true;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;

            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state);
            }
        });
        builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false;

            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload);
            } else {
                articlesAdapter.addMany(state, action.payload);
            }

            state.hasMore = action.payload.length >= state.limit;
        });
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const articlesDisplayActions = articlesDisplaySlice.actions;
export const articlesDisplayReducer = articlesDisplaySlice.reducer;
