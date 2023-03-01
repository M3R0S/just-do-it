import { DeepPartial } from "@reduxjs/toolkit";

import { getLoginIsLoading } from "./getLoginIsLoading";

import { StateSchema } from "app/providers/Store";

describe("getLoginIsLoading", () => {
    test("should return getLoginIsLoading ", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "",
                isLoading: true,
                password: "",
                error: null,
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
});
