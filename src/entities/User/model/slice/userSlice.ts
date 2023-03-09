import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, UserSchema } from "../types/UserSchema";

import { LOCALSTORAGE_USER_KEY } from "shared/constants/localStorage";

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCALSTORAGE_USER_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCALSTORAGE_USER_KEY);
        },
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
