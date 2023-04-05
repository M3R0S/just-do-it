import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/Store";

export const getArticlesSorted = (state: StateSchema) => state.articlesSorted;

export const getArticlesSortedView = createSelector(
    getArticlesSorted,
    (articles) => articles?.view ?? "tile"
);
export const getArticlesSortedOrder = createSelector(
    getArticlesSorted,
    (articles) => articles?.order ?? "asc"
);
export const getArticlesSortedSort = createSelector(
    getArticlesSorted,
    (articles) => articles?.sort ?? "createdAt"
);
export const getArticlesSortedSearch = createSelector(
    getArticlesSorted,
    (articles) => articles?.search ?? ""
);
export const getArticlesSortedType = createSelector(
    getArticlesSorted,
    (articles) => articles?.type ?? "ALL"
);
