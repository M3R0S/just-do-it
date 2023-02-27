import { authByUsernameActions, authByUsernameSlice } from "./authByUsernameSlice";

describe("authByUsernameSlice", () => {
    test("should work with empty state", () => {
        expect(
            authByUsernameSlice.reducer(undefined, authByUsernameActions.))
        ).toEqual({});
    });
});
