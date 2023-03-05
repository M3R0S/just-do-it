import { ReactNode } from "react";

import { StoreProviderAsyncReducers, StoreProviderInitialState } from "../config/StateSchema";

export interface StoreProviderProps {
    children: ReactNode;
    initialState?: StoreProviderInitialState;
    asyncReducers?: StoreProviderAsyncReducers;
}
