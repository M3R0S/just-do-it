import { Reducer } from "@reduxjs/toolkit";

import { StateSchema, StateSchemaKey } from "app/providers/Store";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

export interface UseDynamicReducerLoaderParams {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export type UseDynamicReducerLoader = (params: UseDynamicReducerLoaderParams) => void;
