import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/Store";
import { Article } from "entities/Article";
import { ServerEndpoints, StatusCodes } from "shared/lib/types/serverTypes";

export const fetchArticleRecommendationsList = createAsyncThunk<Article[], void, ThunkConfig>(
    "articleRecommendationsListSlice/fetchArticleRecommendationsList",
    async (params, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        const { api } = extra;

        try {
            const response = await api.get<Article[]>(ServerEndpoints.ARTICLES, {
                params: {
                    _expand: "user",
                    _limit: 4,
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
