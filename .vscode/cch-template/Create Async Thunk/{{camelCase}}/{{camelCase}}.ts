import { createAsyncThunk } from "@reduxjs/toolkit";

import { {{pascalCase}}Props } from "./{{camelCase}}.types";

import { ThunkConfig } from "app/providers/Store";

export const {{camelCase}} = createAsyncThunk<any, any, ThunkConfig>(
    "___/{{camelCase}}",
    async (_, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;
        const { api } = extra;

        try {
            const response = await api.get<any>("");
            const data = response.data;
            if (!data) {
                throw new Error("403");
            }

            return response.data;
        } catch (error) {
            if (error.message.toString().includes("403")) {
                return rejectWithValue("403");
            }

            return rejectWithValue("500");
        }
    }
);
