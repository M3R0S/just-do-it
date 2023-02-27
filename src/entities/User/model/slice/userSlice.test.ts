import { userActions, userSlice } from "./userSlice";

describe("userSlice", () => {
    test("should work with empty state", () => {
        expect(
            userSlice.reducer(undefined, userActions.))
        ).toEqual({});
    });
});
