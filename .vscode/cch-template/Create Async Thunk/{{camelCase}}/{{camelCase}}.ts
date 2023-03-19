import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/Store";
import { StatusCodes } from "shared/lib/types/serverTypes";

export const {{camelCase}} = createAsyncThunk<_, _, ThunkConfig>(
    "_/{{camelCase}}",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        const { api } = extra;

        try {
            const response = await api.get<_>("");
            const data = response.data;
            if (!data) {
                throw new Error(StatusCodes.NO_DATA);
            }

            return data;
        } catch (e) {
            if (e instanceof Error) {
                if (e.message.toString().includes(StatusCodes.NO_DATA)) {
                    return rejectWithValue(StatusCodes.NO_DATA);
                }
            }

            return rejectWithValue(StatusCodes.UNKNOWN);
        }
    }
);
