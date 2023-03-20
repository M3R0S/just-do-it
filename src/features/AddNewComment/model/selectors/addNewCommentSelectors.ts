import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/Store";

export const getAddNewComment = (state: StateSchema) => state.addNewComment ?? {};

export const getAddNewCommentText = createSelector(
    getAddNewComment,
    (comment) => comment.text ?? ""
);
export const getAddNewCommentError = createSelector(getAddNewComment, (comment) => comment.error);
