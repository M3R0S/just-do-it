import { AxiosResponse } from "axios";

import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

import { Comment } from "entities/Comment";
import { testAsyncThunk } from "shared/lib/helpers/testAsyncThunk";

describe("fetchCommentsByArticleId", () => {
    const data: Comment[] = [
        {
            id: "1",
            text: "Comment",
            user: { id: "1", username: "admin" },
        },
    ];
    test("success", async () => {
        const { api, callThunk } = testAsyncThunk(fetchCommentsByArticleId);

        api.get.mockReturnValue(Promise.resolve<Partial<AxiosResponse<Comment[]>>>({ data }));

        const result = await callThunk("1");

        expect(api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error no data 404", async () => {
        const { callThunk, api } = testAsyncThunk(fetchCommentsByArticleId);

        api.get.mockReturnValue(
            Promise.resolve<Partial<AxiosResponse<Comment[]>>>({ status: 404 })
        );

        const result = await callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("404");
    });

    test("error server 500", async () => {
        const { callThunk, api } = testAsyncThunk(fetchCommentsByArticleId);

        api.get.mockRejectedValue(new Error("unknown status code"));

        const result = await callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("500");
    });
});
