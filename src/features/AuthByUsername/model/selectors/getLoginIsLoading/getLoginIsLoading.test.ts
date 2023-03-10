import { getLoginIsLoading } from "./getLoginIsLoading";

import { StateSchema } from "app/providers/Store";

describe("getLoginIsLoading", () => {
    test("should return getLoginIsLoading ", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test("should work with empty state ", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
