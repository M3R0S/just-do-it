import { createAsyncThunk } from "@reduxjs/toolkit";

import { getArticlesLimit, getArticlesPageNumber } from "../../selectors/articlesDisplaySelectors";
import { FetchArticlesListParams } from "./fetchArticlesList.types";

import { ThunkConfig } from "app/providers/Store";
import {
    getArticlesSortedOrder,
    getArticlesSortedSearch,
    getArticlesSortedSort,
} from "features/ArticlesSorted";
import { Article } from "entities/Article";
import { ServerEndpoints, StatusCodes } from "shared/lib/types/serverTypes";
import { addQueryParams } from "shared/lib/url/addQueryParams";

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListParams, ThunkConfig>(
    "articlesDisplaySlice/fetchArticlesList",
    async (params, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { api } = extra;

        const limit = getArticlesLimit(getState());
        const page = getArticlesPageNumber(getState());
        const sort = getArticlesSortedSort(getState());
        const order = getArticlesSortedOrder(getState());
        const search = getArticlesSortedSearch(getState());

        try {
            addQueryParams({
                sort,
                order,
                search,
            });

            const response = await api.get<Article[]>(ServerEndpoints.ARTICLES, {
                params: {
                    _expand: "user",
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                },
            });
            const data = response.data;
            if (!data) {
                throw new Error(StatusCodes.NO_DATA);
            }

            return data;
        } catch (e) {
            if (e instanceof Error) {
                if (e.message.toString().includes(StatusCodes.NO_DATA)) {
                    return rejectWithValue(StatusCodes.NO_DATA);
                }
            }

            return rejectWithValue(StatusCodes.UNKNOWN);
        }
    }
);
