import {
    AnyAction,
    CombinedState,
    DeepPartial,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { LoginSchema } from "features/AuthByUsername";
import { UserSchema } from "entities/User";

export interface StateSchema {
    user: UserSchema;
    login?: LoginSchema;
}

export type StoreProviderInitialState = StateSchema | DeepPartial<StateSchema>;
export type StoreProviderAsyncReducers = DeepPartial<ReducersMapObject<StateSchema>>;

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
}
