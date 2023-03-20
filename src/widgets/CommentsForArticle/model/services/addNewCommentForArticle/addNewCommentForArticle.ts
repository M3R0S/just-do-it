import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

import { ThunkConfig } from "app/providers/Store";
import { getArticleDetailsData } from "entities/Article";
import { Comment } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { ServerEndpoints, StatusCodes } from "shared/lib/types/serverTypes";

export const addNewCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig>(
    "articleDetailsComments/addNewCommentForArticle",
    async (text, thunkAPI) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkAPI;
        const { api } = extra;

        const userId = getUserAuthData(getState())?.id;
        const articleId = getArticleDetailsData(getState())?.id;

        if (!userId && !text && !articleId) {
            return rejectWithValue(StatusCodes.NO_DATA);
        }

        try {
            const response = await api.post<Comment>(ServerEndpoints.COMMENTS, {
                articleId,
                userId,
                text,
            });
            const data = response.data;
            if (!data) {
                throw new Error(StatusCodes.NO_DATA);
            }

            dispatch(fetchCommentsByArticleId(articleId));

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
