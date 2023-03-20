import { AxiosResponse } from "axios";

import { fetchProfileData } from "./fetchProfileData";

import { User } from "entities/User";
import { Profile } from "entities/Profile";
import { testAsyncThunk } from "shared/lib/helpers/testAsyncThunk";

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

    test("success", async () => {
        const { callThunk, api } = testAsyncThunk(fetchProfileData);

        api.get.mockReturnValue(Promise.resolve<Partial<AxiosResponse<Profile>>>({ data }));

        const result = await callThunk("1");

        expect(api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error no data 404", async () => {
        const { callThunk, api } = testAsyncThunk(fetchProfileData);

        api.get.mockReturnValue(Promise.resolve<Partial<AxiosResponse<User>>>({ status: 404 }));

        const result = await callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("404");
    });

    test("error server 500", async () => {
        const { callThunk, api } = testAsyncThunk(fetchProfileData);

        api.get.mockRejectedValue(new Error("unknown status code"));

        const result = await callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("500");
    });
});
