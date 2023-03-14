import { Profile } from "entities/Profile";
import { ValueOf } from "shared/lib/types/helpersTypes";

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    isReadonly: boolean;
    error?: string;
    validateErrors?: ValidateProfileError[]; 
}

export const ValidateProfileError = {
    INCORRECT_FIRSTNAME: "INCORRECT_FIRSTNAME",
    INCORRECT_LASTNAME: "INCORRECT_LASTNAME",
    INCORRECT_AGE: "INCORRECT_AGE",
    INCORRECT_CITY: "INCORRECT_CITY",
    INCORRECT_USERNAME: "INCORRECT_USERNAME",
    NO_DATA: "PROFILE_NO_DATA",
    SERVER_ERROR: "SERVER_ERROR",
} as const;

export type ValidateProfileError = ValueOf<typeof ValidateProfileError>;