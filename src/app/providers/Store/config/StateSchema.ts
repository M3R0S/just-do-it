import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { LoginSchema } from "features/AuthByUsername";
import { ProfileSchema } from "features/EditableProfileCard";
import { UserSchema } from "entities/User";
import { ArticleDetailsSchema } from "entities/Article";

export interface StateSchema {
    user: UserSchema;

    //? async reducers
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
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
