import { ReducersMapObject } from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";

import { scrollReducer } from "widgets/Page";
import { userReducer } from "entities/User";

export const rootReducer = (
    asyncReducers?: ReducersMapObject<StateSchema>
): ReducersMapObject<StateSchema> => {
    return {
        ...asyncReducers,
        user: userReducer,
        scroll: scrollReducer,
    };
};
