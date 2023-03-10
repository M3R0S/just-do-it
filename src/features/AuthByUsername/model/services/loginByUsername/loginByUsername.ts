import { createAsyncThunk } from "@reduxjs/toolkit";

import { LoginByUsernameProps } from "./loginByUsername.types";

import { ThunkConfig } from "app/providers/Store";
import { User } from "entities/User";
import { userActions } from "entities/User/model/slice/userSlice";
import { LOCALSTORAGE_USER_KEY } from "shared/lib/constants/localStorage";
import { ServerEndpoints, StatusCodes } from "shared/lib/types/serverTypes";

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;
        const { api } = extra;

        try {
            const response = await api.post<User>(ServerEndpoints.LOGIN, authData);
            const data = response.data;
            console.log(data);
            if (!data) {
                throw new Error(StatusCodes.NOT_AUTHORIZED);
            }

            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(data));
            dispatch(userActions.setAuthData(data));

            return response.data;
        } catch (e) {
            if (e instanceof Error) {
                if (e.message.toString().includes(StatusCodes.NOT_AUTHORIZED)) {
                    return rejectWithValue(StatusCodes.NOT_AUTHORIZED);
                }
            }

            return rejectWithValue(StatusCodes.UNKNOWN);
        }
    }
);
