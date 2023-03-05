import { DeepPartial } from "@reduxjs/toolkit";

import { getLoginState } from "./getLoginState";
import { LoginSchema } from "../../types/LoginSchema";

import { StateSchema } from "app/providers/Store";

describe("getLoginState", () => {
    test("should return getLoginState", () => {
        const loginState: LoginSchema = {
            username: "name",
            isLoading: true,
            password: "password",
            error: "error",
        };

        const state: DeepPartial<StateSchema> = {
            login: loginState,
        };
        expect(getLoginState(state as StateSchema)).toEqual(loginState);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
