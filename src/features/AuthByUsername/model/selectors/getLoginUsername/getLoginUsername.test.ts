import { getLoginUsername } from "./getLoginUsername";

import { StateSchema } from "app/providers/Store";

describe("getLoginUsername", () => {
    test("should return getLoginUsername", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "name",
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual("name");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
