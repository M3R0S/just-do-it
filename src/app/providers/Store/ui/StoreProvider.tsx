import { FC } from "react";
import { Provider } from "react-redux";

import { StoreProviderProps } from "./StoreProvider.types";
import { createReduxStore } from "../config/store";

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(initialState, asyncReducers);

    return <Provider store={store}>{children}</Provider>;
};
