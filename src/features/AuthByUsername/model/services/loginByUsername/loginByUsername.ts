import { createAsyncThunk } from "@reduxjs/toolkit";

import { LoginByUsernameProps } from "./loginByUsername.types";

import { ThunkConfig } from "app/providers/Store";
import { User } from "entities/User";
import { userActions } from "entities/User/model/slice/userSlice";
import { LOCALSTORAGE_USER_KEY } from "shared/lib/constants/localStorage";

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;
        const { api } = extra;

        try {
            const response = await api.post<User>("/login", authData);
            const data = response.data;
            if (!data) {
                throw new Error("403");
            }

            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(data));
            dispatch(userActions.setAuthData(data));

            return response.data;
        } catch (error) {
            if (error.message.toString().includes("403")) {
                return rejectWithValue("403");
            }

            return rejectWithValue("500");
        }
    }
);
