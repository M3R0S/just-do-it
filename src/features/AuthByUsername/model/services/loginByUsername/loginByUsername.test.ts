import axios, { AxiosResponse } from "axios";

import { loginByUsername } from "./loginByUsername";

import { User, userActions } from "entities/User";
import { testAsyncThunk } from "shared/lib/helpers/testAsyncThunk";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("loginByUsername", () => {
    test("success login", async () => {
        const userValue: User = { username: "user", id: "1" };
        mockedAxios.post.mockReturnValue(
            Promise.resolve<Partial<AxiosResponse<User>>>({ data: userValue })
        );

        const { callThunk, dispatch } = testAsyncThunk(loginByUsername);
        const result = await callThunk({ password: "123", username: "user" });

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("error 403 login", async () => {
        mockedAxios.post.mockReturnValue(
            Promise.resolve<Partial<AxiosResponse<User>>>({ data: undefined })
        );

        const { callThunk, dispatch } = testAsyncThunk(loginByUsername);
        const result = await callThunk({ password: "123", username: "user" });

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("403");
    });

    test("error 500 login", async () => {
        mockedAxios.post.mockRejectedValue(new Error("unknown status code"));

        const { callThunk, dispatch } = testAsyncThunk(loginByUsername);
        const result = await callThunk({ password: "123", username: "user" });

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("500");
    });
});
