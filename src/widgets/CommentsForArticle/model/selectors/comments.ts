import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/Store";

const getArticleDetailsComments = (state: StateSchema) => state.articleDetailsComments;

export const getArticleDetailsCommentsIsLoading = createSelector(
    getArticleDetailsComments,
    (comment) => comment?.isLoading ?? false
);

export const getArticleDetailsCommentsError = createSelector(
    getArticleDetailsComments,
    (comment) => comment?.error ?? ""
);
