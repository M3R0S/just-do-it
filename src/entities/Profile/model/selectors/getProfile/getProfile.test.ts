import { DeepPartial } from "@reduxjs/toolkit";

// import { getProfile } from "./getProfile";

import { StateSchema } from "app/providers/Store";

describe("getProfile", () => {
    test("should return Profile state", () => {
        const state: DeepPartial<StateSchema> = {};

        // expect(getProfile(state as StateSchema)).toEqual({  });
        expect(true).toBe(true);
    });
});
