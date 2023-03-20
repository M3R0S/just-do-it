import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { CommentsForArticleSchema } from "../types/commentsForArticle";

import { Comment } from "entities/Comment";

export const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const articleDetailsCommentsSlice = createSlice({
    name: "articleDetailsComments",
    initialState: commentsAdapter.getInitialState<CommentsForArticleSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;
export const articleDetailsCommentsActions = articleDetailsCommentsSlice.actions;
