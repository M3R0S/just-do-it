import { getProfileForm } from "./getProfileForm";

import { StateSchema } from "app/providers/Store";
import { Profile } from "entities/Profile";

describe("getProfileForm", () => {
    test("should return formData", () => {
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

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
