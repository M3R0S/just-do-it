import { {{camelCase}}Actions, {{camelCase}}Slice } from "./{{camelCase}}Slice";

describe("{{camelCase}}Slice", () => {
    test("should work with empty state", () => {
        expect(
            {{camelCase}}Slice.reducer(undefined, {{camelCase}}Actions.))
        ).toEqual({});
    });
});
