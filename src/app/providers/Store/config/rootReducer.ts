import { ReducersMapObject } from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";

import { userReducer } from "entities/User";

export const rootReducer = (
    asyncReducers?: ReducersMapObject<StateSchema>
): ReducersMapObject<StateSchema> => {
    return {
        ...asyncReducers,
        user: userReducer,
    };
};
