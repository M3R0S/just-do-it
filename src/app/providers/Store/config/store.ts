import { CombinedState, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";

import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { rootReducer } from "./rootReducer";
import { createReducerManager } from "./reducerManager";

import { $axios } from "shared/api/axios";
import { rtkApi } from "shared/api/rtkApi";

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) => {
    const reducerManager = createReducerManager(rootReducer(asyncReducers));

    const extraArgument: ThunkExtraArg = {
        api: $axios,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument,
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
