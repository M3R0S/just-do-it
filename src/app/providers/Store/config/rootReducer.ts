import { ReducersMapObject } from "@reduxjs/toolkit";

import { StateSchema, StoreProviderAsyncReducers } from "./StateSchema";

import { userReducer } from "entities/User";

export const rootReducer = (
    asyncReducers?: StoreProviderAsyncReducers
): ReducersMapObject<StateSchema> => {
    return {
        ...asyncReducers,
        user: userReducer,
    };
};
