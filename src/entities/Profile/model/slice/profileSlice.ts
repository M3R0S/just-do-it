import { createSlice } from "@reduxjs/toolkit";

import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { ProfileSchema } from "../types/ProfileSchema";

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    isReadonly: true,
    error: undefined,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
