import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { CommentsForArticleSchema } from "widgets/CommentsForArticle";
import { ArticlesDisplaySchema } from "widgets/ArticlesDisplay";
import { ScrollSchema } from "widgets/Page";
import { LoginSchema } from "features/AuthByUsername";
import { ProfileSchema } from "features/EditableProfileCard";
import { AddNewCommentSchema } from "features/AddNewComment";
import { ArticlesSortedSchema } from "features/ArticlesSorted/model/types/articlesSortedSchema";
import { UserSchema } from "entities/User";
import { ArticleDetailsSchema } from "entities/Article";

export interface StateSchema {
    user: UserSchema;
    scroll: ScrollSchema;

    //? async reducers
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: CommentsForArticleSchema;
    addNewComment?: AddNewCommentSchema;
    articlesDisplay?: ArticlesDisplaySchema;
    articlesSorted?: ArticlesSortedSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T = string> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
