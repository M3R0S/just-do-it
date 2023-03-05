import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { LoginByUsernameProps } from "./loginByUsername.types";

import { User } from "entities/User";
import { userActions } from "entities/User/model/slice/userSlice";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/localStorage";

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>("http://localhost:8000/login", authData);
        const data = response.data;
        if (!data) {
            throw new Error("403");
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
        thunkAPI.dispatch(userActions.setAuthData(data));

        return response.data;
    } catch (error) {
        if (error.message.toString().includes("403")) {
            return thunkAPI.rejectWithValue("403");
        }

        return thunkAPI.rejectWithValue("500");
    }
});
