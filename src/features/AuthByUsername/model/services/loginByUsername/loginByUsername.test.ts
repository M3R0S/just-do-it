import { AxiosResponse } from "axios";

import { loginByUsername } from "./loginByUsername";

import { User, userActions } from "entities/User";
import { testAsyncThunk } from "shared/lib/helpers/testAsyncThunk";

describe("loginByUsername", () => {
    const userValue: User = { username: "user", id: "1" };

    test("success login", async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(loginByUsername);

        api.post.mockReturnValue(
            Promise.resolve<Partial<AxiosResponse<User>>>({ data: userValue })
        );

        const result = await callThunk({ password: "123", username: "user" });

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("error 403 login", async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(loginByUsername);

        api.post.mockReturnValue(Promise.resolve<Partial<AxiosResponse<User>>>({ status: 403 }));

        const result = await callThunk({ password: "123", username: "user" });

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("403");
    });

    test("error 500 login", async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(loginByUsername);

        api.post.mockRejectedValue(new Error("unknown status code"));

        const result = await callThunk({ password: "123", username: "user" });

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("500");
    });
});
