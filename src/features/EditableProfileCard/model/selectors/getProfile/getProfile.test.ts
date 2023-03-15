import { ProfileSchema, ValidateProfileError } from "../../types/ProfileSchema";
import { getProfile } from "./getProfile";

import { StateSchema } from "app/providers/Store";
import { Profile } from "entities/Profile";

describe("getProfileIsLoading", () => {
    test("should return isLoading", () => {
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

        const profile: ProfileSchema = {
            data,
            isLoading: true,
            isReadonly: false,
            error: "403",
            form: data,
            validateErrors: [ValidateProfileError.NO_DATA],
        };

        const state: DeepPartial<StateSchema> = {
            profile,
        };
        expect(getProfile(state as StateSchema)).toEqual(profile);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfile(state as StateSchema)).toEqual(undefined);
    });
});
