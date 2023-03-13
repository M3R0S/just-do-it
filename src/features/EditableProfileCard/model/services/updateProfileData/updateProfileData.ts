import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

import { ThunkConfig } from "app/providers/Store";
import { Profile } from "entities/Profile";
import { StatusCodes, ServerEndpoints } from "shared/lib/types/serverTypes";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { api } = extra;

        try {
            const formData = getProfileForm(getState());

            const response = await api.put<Profile>(ServerEndpoints.PROFILE, formData);
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
