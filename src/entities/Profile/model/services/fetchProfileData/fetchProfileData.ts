import { createAsyncThunk } from "@reduxjs/toolkit";

import { Profile } from "../../types/ProfileSchema";

import { ThunkConfig } from "app/providers/Store";
import { StatusCodes, ServerEndpoints } from "shared/lib/types/serverTypes";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
    "profile/fetchProfileData",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        const { api } = extra;

        try {
            const response = await api.get<Profile>(ServerEndpoints.PROFILE);
            const data = response.data;
            throw new Error();
            if (!data) {
                throw new Error(StatusCodes.NO_DATA);
            }

            return response.data;
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
