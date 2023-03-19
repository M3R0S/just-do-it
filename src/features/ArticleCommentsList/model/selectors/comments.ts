import { createSelector } from "@reduxjs/toolkit";

import { commentsAdapter } from "../slice/articleDetailsCommentsSlice";

import { StateSchema } from "app/providers/Store";

const getArticleDetailsComments = (state: StateSchema) => state.articleDetailsComments;

export const getArticleDetailsCommentsData = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments ?? commentsAdapter.getInitialState()
);

export const getArticleDetailsCommentsIsLoading = createSelector(
    getArticleDetailsComments,
    (comment) => comment?.isLoading ?? false
);

export const getArticleDetailsCommentsError = createSelector(
    getArticleDetailsComments,
    (comment) => comment?.error ?? ""
);
