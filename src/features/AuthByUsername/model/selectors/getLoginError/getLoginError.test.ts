import { DeepPartial } from "@reduxjs/toolkit";

import { getLoginError } from "./getLoginError";

import { StateSchema } from "app/providers/Store";

describe("getLoginError", () => {
    test("should return getLoginError ", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "",
                isLoading: null,
                password: "",
                error: "error",
            },
        };

        expect(getLoginError(state as StateSchema)).toEqual("error");
    });
});
