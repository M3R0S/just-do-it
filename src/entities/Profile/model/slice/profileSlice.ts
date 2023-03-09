import { createSlice } from "@reduxjs/toolkit";

import { ProfileSchema } from "../types/ProfileSchema";

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    readonly: true,
    error: undefined,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
