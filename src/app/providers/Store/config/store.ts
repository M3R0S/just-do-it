import { configureStore } from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";
import { rootReducer } from "./rootReducer";

export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
