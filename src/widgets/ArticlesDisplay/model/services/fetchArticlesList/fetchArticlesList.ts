import { createAsyncThunk } from "@reduxjs/toolkit";

import { FetchArticlesList } from "./fetchArticlesList.types";
import { getArticlesLimit } from "../../selectors/articlesDisplaySelectors";

import { ThunkConfig } from "app/providers/Store";
import { Article } from "entities/Article";
import { ServerEndpoints, StatusCodes } from "shared/lib/types/serverTypes";

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesList, ThunkConfig>(
    "articlesDisplaySlice/fetchArticlesList",
    async (args, thunkAPI) => {
        const { page = 1 } = args;
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { api } = extra;

        const limit = getArticlesLimit(getState());

        try {
            const response = await api.get<Article[]>(ServerEndpoints.ARTICLES, {
                params: {
                    _expand: "user",
                    _limit: limit,
                    _page: page,
                },
            });
            const data = response.data;
            if (!data) {
                throw new Error(StatusCodes.NO_DATA);
            }

            return data;
        } catch (e) {
            if (e instanceof Error) {
                if (e.message.toString().includes(StatusCodes.NO_DATA)) {
                    return rejectWithValue(StatusCodes.NO_DATA);
                }
            }

            return rejectWithValue(StatusCodes.UNKNOWN);
        }
    }
);
