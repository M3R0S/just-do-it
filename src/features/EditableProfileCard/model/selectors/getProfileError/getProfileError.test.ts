import { getProfileError } from "./getProfileError";

import { StateSchema } from "app/providers/Store";

describe("getProfileError", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "403",
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual("403");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
