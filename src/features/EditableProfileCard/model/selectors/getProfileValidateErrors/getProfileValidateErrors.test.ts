import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/ProfileSchema";

import { StateSchema } from "app/providers/Store";

describe("getProfileValidateErrors", () => {
    test("should return validate errors", () => {
        const validateErrors: ValidateProfileError[] = [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.NO_DATA,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: validateErrors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
