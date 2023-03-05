import { Reducer } from "@reduxjs/toolkit";

import { StateSchemaKey } from "app/providers/Store";

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer;
};

export type ReducerListEntries = [StateSchemaKey, Reducer];

export interface UseDynamicReducerLoaderParams {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export type UseDynamicReducerLoader = (params: UseDynamicReducerLoaderParams) => void;
