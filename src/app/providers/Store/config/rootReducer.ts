import { combineReducers } from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";

import { loginSlice } from "features/AuthByUsername";

export const rootReducer = combineReducers<StateSchema>({
    login: loginSlice.reducer,
});
