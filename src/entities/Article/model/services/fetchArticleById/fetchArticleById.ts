import { createAsyncThunk } from "@reduxjs/toolkit";

import { Article } from "../../types/article";

import { ThunkConfig } from "app/providers/Store";
import { StatusCodes } from "shared/lib/types/serverTypes";

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig>(
    "articleDetails/fetchArticleById",
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        const { api } = extra;

        try {
            const response = await api.get<Article>(`/articles/${articleId}`);
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
