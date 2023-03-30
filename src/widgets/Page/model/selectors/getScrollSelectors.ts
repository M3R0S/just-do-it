import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/Store";

export const getScroll = (state: StateSchema) => state.scroll;

export const getScrollInfo = createSelector(getScroll, (scroll) => scroll.scroll);

export const getScrollByPath = createSelector(
    getScrollInfo,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] ?? 0
);
