import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { ValidateProfileError } from "../../types/ProfileSchema";
import { validateProfileData } from "../validateProfileData/validateProfileData";

import { ThunkConfig } from "app/providers/Store";
import { Profile } from "entities/Profile";
import { ServerEndpoints } from "shared/lib/types/serverTypes";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const { api } = extra;

    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await api.put<Profile>(
            `${ServerEndpoints.PROFILE}/${formData?.id}`,
            formData
        );
        const data = response.data;
        if (!data) {
            throw new Error(ValidateProfileError.NO_DATA);
        }

        return data;
    } catch (e) {
        if (e instanceof Error) {
            if (e.message.toString().includes(ValidateProfileError.NO_DATA)) {
                return rejectWithValue([ValidateProfileError.NO_DATA]);
            }
        }

        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
