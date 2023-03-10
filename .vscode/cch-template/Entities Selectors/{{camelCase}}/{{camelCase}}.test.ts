import { {{camelCase}} } from "./{{camelCase}}";

import { StateSchema } from "app/providers/Store";

describe("{{camelCase}}", () => {
    test("should return {{camelCase}} ", () => {
        const state: DeepPartial<StateSchema> = {

        };

        expect({{camelCase}}(state as StateSchema)).toEqual({  });
    });
});
