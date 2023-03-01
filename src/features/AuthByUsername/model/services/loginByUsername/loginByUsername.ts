import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { LoginByUsernameProps } from "./loginByUsername.types";

import { User } from "entities/User";

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>(
            "http://localhost:8000/login",
            authData
        );
        if (!response.data) {
            throw new Error("error");
        }

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("error");
    }
});
