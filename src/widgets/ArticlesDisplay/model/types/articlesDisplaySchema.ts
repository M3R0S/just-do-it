import { EntityState } from "@reduxjs/toolkit";

import { Article } from "entities/Article";

export interface ArticlesDisplaySchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;

    page: number;
    limit: number;
    hasMore: boolean;

    _inited: boolean;
}
