import { DeepPartial } from "@reduxjs/toolkit";

import { getLoginPassword } from "./getLoginPassword";

import { StateSchema } from "app/providers/Store";

describe("getLoginPassword", () => {
    test("should return getLoginPassword ", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "",
                isLoading: null,
                password: "password",
                error: null,
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual("password");
    });
});
