import { fetchNextArticlePage } from "./fetchNextArticlePage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

import { testAsyncThunk } from "shared/lib/helpers/testAsyncThunk";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticlePage", () => {
    test("success", async () => {
        const { callThunk, dispatch } = testAsyncThunk(fetchNextArticlePage, {
            articlesDisplay: {
                page: 1,
                limit: 5,
                entities: {},
                ids: [],
                isLoading: false,
                hasMore: true,
            },
        });

        await callThunk();

        expect(dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });

    test("not called", async () => {
        const { callThunk, dispatch } = testAsyncThunk(fetchNextArticlePage, {
            articlesDisplay: {
                page: 1,
                limit: 5,
                entities: {},
                ids: [],
                isLoading: false,
                hasMore: false,
            },
        });

        await callThunk();

        expect(dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test("not called isLoading", async () => {
        const { callThunk, dispatch } = testAsyncThunk(fetchNextArticlePage, {
            articlesDisplay: {
                page: 1,
                limit: 5,
                entities: {},
                ids: [],
                isLoading: true,
                hasMore: true,
            },
        });

        await callThunk();

        expect(dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
