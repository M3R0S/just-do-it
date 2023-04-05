import { createAsyncThunk } from "@reduxjs/toolkit";

import { getArticlesInited } from "../../selectors/articlesDisplaySelectors";
import { articlesDisplayActions } from "../../slice/articlesDisplaySlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

import { ThunkConfig } from "app/providers/Store";
import { getArticlesSortedView } from "features/ArticlesSorted";
import { articlesSortedActions } from "features/ArticlesSorted/model/slice/articlesSortedSlice";
import { ArticleSortField, ArticleType } from "entities/Article";
import { SortOrder } from "shared/lib/types/serverTypes";

export const initArticleList = createAsyncThunk<void, URLSearchParams, ThunkConfig>(
    "articlesDisplaySlice/initArticleList",
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const isInited = getArticlesInited(getState());
        const view = getArticlesSortedView(getState());

        if (!isInited) {
            const params: Record<string, (param: any) => void> = {
                order: (param: SortOrder) => {
                    dispatch(articlesSortedActions.setOrder(param));
                },
                sort: (param: ArticleSortField) => {
                    dispatch(articlesSortedActions.setSort(param));
                },
                search: (param: string) => {
                    dispatch(articlesSortedActions.setSearch(param));
                },
                type: (param: ArticleType) => {
                    dispatch(articlesSortedActions.setType(param));
                },
            };

            Object.entries(params).forEach(([param, action]) => {
                const urlParam = searchParams.get(param);

                if (urlParam) {
                    action(urlParam);
                }
            });

            dispatch(articlesDisplayActions.initState(view));
            dispatch(fetchArticlesList({}));
        }
    }
);
