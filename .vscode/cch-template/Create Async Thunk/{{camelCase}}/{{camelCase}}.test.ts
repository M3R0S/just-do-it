import { AxiosResponse } from "axios";

import { testAsyncThunk } from "shared/lib/helpers/testAsyncThunk";

describe("{{camelCase}}", () => {
    const data = 

    test("success", async () => {
        const { api, callThunk } = testAsyncThunk({{camelCase}});

        api.get.mockReturnValue(Promise.resolve<Partial<AxiosResponse<_>>>({ data }));

        const result = await callThunk();

        expect(api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error no data 404", async () => {
        const { callThunk, api } = testAsyncThunk({{camelCase}});

        api.get.mockReturnValue(Promise.resolve<Partial<AxiosResponse<_>>>({ status: 404 }));

        const result = await callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("404");
    });

    test("error server 500", async () => {
        const { callThunk, api } = testAsyncThunk({{camelCase}});

        api.get.mockRejectedValue(new Error("unknown status code"));

        const result = await callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("500");
    });
});