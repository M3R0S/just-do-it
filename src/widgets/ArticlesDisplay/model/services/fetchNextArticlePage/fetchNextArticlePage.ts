import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getArticlesHasMore,
    getArticlesIsLoading,
    getArticlesPageNumber,
} from "../../selectors/articlesDisplaySelectors";
import { articlesDisplayActions } from "../../slice/articlesDisplaySlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

import { ThunkConfig } from "app/providers/Store";

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig>(
    "articlesDisplaySlice/fetchNextArticlePage",
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const hasMore = getArticlesHasMore(getState());
        const page = getArticlesPageNumber(getState());
        const isLoading = getArticlesIsLoading(getState());

        if (hasMore && !isLoading) {
            const nextPage = page + 1;

            dispatch(articlesDisplayActions.setPage(nextPage));
            dispatch(fetchArticlesList({ page: nextPage }));
        }
    }
);
