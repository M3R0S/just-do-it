import { get{{pascalCase}} } from "./get{{pascalCase}}";

import { StateSchema } from "app/providers/Store";

describe("get{{pascalCase}}", () => {
    test("should return {{pascalCase}} state", () => {
        const state: DeepPartial<StateSchema> = {

        };

        expect(get{{pascalCase}}(state as StateSchema)).toEqual({  });
    });
});
