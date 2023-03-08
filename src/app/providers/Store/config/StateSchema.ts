import {
    AnyAction,
    CombinedState,
    DeepPartial,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";

import { LoginSchema } from "features/AuthByUsername";
import { UserSchema } from "entities/User";
import { ProfileSchema } from "entities/Profile";

export interface StateSchema {
    user: UserSchema;

    //? async reducers
    login?: LoginSchema;
    profile?: ProfileSchema;
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
