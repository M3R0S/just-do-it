import { AxiosResponse } from "axios";

import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../types/ProfileSchema";

import { User } from "entities/User";
import { Profile } from "entities/Profile";
import { testAsyncThunk } from "shared/lib/helpers/testAsyncThunk";

describe("updateProfileData", () => {
    const data: Profile = {
        id: "1",
        firstname: "Bogdan",
        lastname: "Moskalenko",
        age: "21",
        currency: "RUB",
        country: "Russia",
        city: "Yalta",
        username: "admin",
        avatar: "https://anekdo.net/pic/photo/221026-233029vwf.jpg",
    };

    test("success", async () => {
        const { callThunk, api } = testAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        api.put.mockReturnValue(Promise.resolve<Partial<AxiosResponse<Profile>>>({ data }));

        const result = await callThunk();

        expect(api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error no data 404", async () => {
        const { callThunk, api } = testAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        api.put.mockReturnValue(Promise.resolve<Partial<AxiosResponse<User>>>({}));

        const result = await callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
    });

    test("error server 500", async () => {
        const { callThunk, api } = testAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        api.put.mockRejectedValue(new Error("error"));

        const result = await callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test("validation error", async () => {
        const { callThunk } = testAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, firstname: "" },
            },
        });

        const result = await callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_FIRSTNAME]);
    });
});
