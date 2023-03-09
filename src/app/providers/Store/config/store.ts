import { configureStore } from "@reduxjs/toolkit";

import { StoreProviderAsyncReducers, StoreProviderInitialState } from "./StateSchema";
import { rootReducer } from "./rootReducer";
import { createReducerManager } from "./reducerManager";

import { $axios } from "shared/api/axios";

export const createReduxStore = (
    initialState?: StoreProviderInitialState,
    asyncReducers?: StoreProviderAsyncReducers
) => {
    const reducerManager = createReducerManager(rootReducer(asyncReducers));

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $axios,
                    },
                },
            }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
