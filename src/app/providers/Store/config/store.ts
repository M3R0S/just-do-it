import { configureStore } from "@reduxjs/toolkit";

import { StateSchema, StoreProviderAsyncReducers, StoreProviderInitialState } from "./StateSchema";
import { rootReducer } from "./rootReducer";
import { createReducerManager } from "./reducerManager";

export const createReduxStore = (
    initialState?: StoreProviderInitialState,
    asyncReducers?: StoreProviderAsyncReducers
) => {
    const reducerManager = createReducerManager(rootReducer(asyncReducers));

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
