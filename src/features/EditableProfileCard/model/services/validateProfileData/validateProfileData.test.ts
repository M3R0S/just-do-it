import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../types/ProfileSchema";

import { Profile } from "entities/Profile";

describe("fetchProfileData", () => {
    const data: Profile = {
        firstname: "Bogdan",
        lastname: "Moskalenko",
        age: "21",
        currency: "RUB",
        country: "Russia",
        city: "Yalta",
        username: "admin",
        avatar: "https://anekdo.net/pic/photo/221026-233029vwf.jpg",
    };

    test("correct validation", () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test("incorrect first name", () => {
        const result = validateProfileData({ ...data, firstname: "" });

        expect(result).toEqual([ValidateProfileError.INCORRECT_FIRSTNAME]);
    });

    test("incorrect last name", () => {
        const result = validateProfileData({ ...data, lastname: "" });

        expect(result).toEqual([ValidateProfileError.INCORRECT_LASTNAME]);
    });

    test("incorrect age", () => {
        const ageVoidString = validateProfileData({ ...data, age: "" });
        const ageValueZero = validateProfileData({ ...data, age: "0" });
        const ageValueMoreHundred = validateProfileData({ ...data, age: "100" });
        const ageValueLessZero = validateProfileData({ ...data, age: "-1" });

        expect(ageVoidString).toEqual([ValidateProfileError.INCORRECT_AGE]);
        expect(ageValueZero).toEqual([ValidateProfileError.INCORRECT_AGE]);
        expect(ageValueMoreHundred).toEqual([ValidateProfileError.INCORRECT_AGE]);
        expect(ageValueLessZero).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test("incorrect city", () => {
        const result = validateProfileData({ ...data, city: "" });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test("incorrect username", () => {
        const result = validateProfileData({ ...data, username: "" });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test("incorrect all", () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_FIRSTNAME,
            ValidateProfileError.INCORRECT_LASTNAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });
});
