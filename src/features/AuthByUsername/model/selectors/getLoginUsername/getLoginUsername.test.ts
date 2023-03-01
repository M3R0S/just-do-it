import { DeepPartial } from "@reduxjs/toolkit";

import { getLoginUsername } from "./getLoginUsername";

import { StateSchema } from "app/providers/Store";

describe("getLoginUsername", () => {
    test("should return getLoginUsername ", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "name",
                isLoading: null,
                password: "",
                error: null,
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual("name");
    });
});
