import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ArticlesSortedSchema } from "../types/articlesSortedSchema";

import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
import { SortOrder } from "shared/lib/types/serverTypes";
import { LOCALSTORAGE_ARTICLES_VIEW_KEY } from "shared/lib/constants/localStorage";

const initialState: ArticlesSortedSchema = {
    sort: "createdAt",
    order: "asc",
    search: "",
    view: "tile",
    type: "ALL",
};

export const articlesSortedSlice = createSlice({
    name: "articleSorted",
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCALSTORAGE_ARTICLES_VIEW_KEY, action.payload);
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(LOCALSTORAGE_ARTICLES_VIEW_KEY);

            if (view) {
                state.view = view as ArticleView;
            }
        },
    },
});

export const articlesSortedActions = articlesSortedSlice.actions;
export const articlesSortedReducer = articlesSortedSlice.reducer;
