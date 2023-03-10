import { getLoginPassword } from "./getLoginPassword";

import { StateSchema } from "app/providers/Store";

describe("getLoginPassword", () => {
    test("should return getLoginPassword ", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: "password",
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual("password");
    });

    test("should work with empty state ", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});
