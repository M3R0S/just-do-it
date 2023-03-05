import { DeepPartial } from "@reduxjs/toolkit";

import { getLoginError } from "./getLoginError";

import { StateSchema } from "app/providers/Store";

describe("getLoginError", () => {
    test("should return getLoginError ", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "",
                isLoading: false,
                password: "",
                error: "error",
            },
        };

        expect(getLoginError(state as StateSchema)).toEqual("error");
    });

    test("should work with empty state ", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
