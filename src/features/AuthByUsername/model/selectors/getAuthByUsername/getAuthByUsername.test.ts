import { DeepPartial } from "@reduxjs/toolkit";

import { getAuthByUsername } from "./getAuthByUsername";

import { StateSchema } from "app/providers/Store";

describe("getAuthByUsername", () => {
    test("should return AuthByUsername state", () => {
        const state: DeepPartial<StateSchema> = {

        };

        expect(getAuthByUsername(state as StateSchema)).toEqual({  });
    });
});
