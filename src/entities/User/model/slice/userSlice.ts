import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserSchema } from "../types/UserSchema";
import { User } from "../types/user";

import { LOCALSTORAGE_USER_KEY } from "shared/lib/constants/localStorage";

const initialState: UserSchema = {
    _isInited: false,
};

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

            state._isInited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCALSTORAGE_USER_KEY);
        },
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
