import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AddNewCommentSchema } from "../types/addNewComment";

const initialState: AddNewCommentSchema = {
    text: "",
    error: undefined,
};

export const addNewCommentSlice = createSlice({
    name: "addNewComment",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const addNewCommentActions = addNewCommentSlice.actions;
export const addNewCommentReducer = addNewCommentSlice.reducer;
