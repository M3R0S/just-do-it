import { profileActions, profileReducer } from "./profileSlice";
import { ProfileSchema, ValidateProfileError } from "../types/ProfileSchema";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

import { Profile } from "entities/Profile";

describe("profileSlice", () => {
    const data: Profile = {
        firstname: "Bogdan",
        lastname: "Moskalenko",
        age: "21",
        currency: "RUB",
        country: "Russia",
        city: "Yalta",
        username: "admin",
        avatar: "https://anekdo.net/pic/photo/221026-233029vwf.jpg",
    };

    test("set isReadonly", () => {
        const state: DeepPartial<ProfileSchema> = {
            isReadonly: true,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.setIsReadonly(false))).toEqual<
            DeepPartial<ProfileSchema>
        >({ isReadonly: false });
    });

    test("set isReadonly", () => {
        const state: DeepPartial<ProfileSchema> = { data };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual<
            DeepPartial<ProfileSchema>
        >({ isReadonly: true, validateErrors: undefined, data, form: data });
    });

    test("update profile", () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: "admin" } };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: "user",
                })
            )
        ).toEqual<DeepPartial<ProfileSchema>>({ form: { username: "user" } });
    });

    test("update profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual<
            DeepPartial<ProfileSchema>
        >({ isLoading: true, validateErrors: undefined });
    });

    test("update profile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))
        ).toEqual<DeepPartial<ProfileSchema>>({
            isLoading: false,
            validateErrors: undefined,
            isReadonly: true,
            form: data,
            data,
        });
    });
});
