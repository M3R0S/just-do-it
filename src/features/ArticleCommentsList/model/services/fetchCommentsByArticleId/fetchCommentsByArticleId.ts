import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/Store";
import { Comment } from "entities/Comment";
import { StatusCodes } from "shared/lib/types/serverTypes";

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig
>("articleDetailsComments/fetchCommentsByArticleId", async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    const { api } = extra;

    if (!articleId) {
        return rejectWithValue(StatusCodes.NO_DATA);
    }

    try {
        const response = await api.get<Comment[]>("/comments", {
            params: {
                articleId,
                _expand: "user",
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
});
