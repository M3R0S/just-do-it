import { getProfileIsLoading } from "./getProfileIsLoading";

import { StateSchema } from "app/providers/Store";

describe("getProfileIsLoading", () => {
    test("should return isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });
});
