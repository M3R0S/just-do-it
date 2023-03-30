import { createAsyncThunk } from "@reduxjs/toolkit";

import { getArticlesInited } from "../../selectors/articlesDisplaySelectors";
import { articlesDisplayActions } from "../../slice/articlesDisplaySlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

import { ThunkConfig } from "app/providers/Store";

export const initArticleList = createAsyncThunk<void, void, ThunkConfig>(
    "articlesDisplaySlice/initArticleList",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const isInited = getArticlesInited(getState());

        if (!isInited) {
            dispatch(articlesDisplayActions.initState());
            dispatch(fetchArticlesList({ page: 1 }));
        }
    }
);
