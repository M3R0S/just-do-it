import { getProfileIsReadonly } from "./getProfileIsReadonly";

import { StateSchema } from "app/providers/Store";

describe("getProfileIsReadonly", () => {
    test("should return isReadonly", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isReadonly: false,
            },
        };
        expect(getProfileIsReadonly(state as StateSchema)).toEqual(false);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsReadonly(state as StateSchema)).toEqual(true);
    });
});
