import { ValidateProfileError } from "../../types/ProfileSchema";

import { Profile } from "entities/Profile";

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const { age, city, firstname, lastname, username } = profile;

    const errors: ValidateProfileError[] = [];

    if (!firstname) {
        errors.push(ValidateProfileError.INCORRECT_FIRSTNAME);
    }

    if (!lastname) {
        errors.push(ValidateProfileError.INCORRECT_LASTNAME);
    }

    if (!age || Number(age) <= 0 || Number(age) >= 100) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }
    
    return errors;
};
