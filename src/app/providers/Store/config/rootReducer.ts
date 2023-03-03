import { combineReducers } from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";

import { loginSlice } from "features/AuthByUsername";
import { userSlice } from "entities/User/model/slice/userSlice";

export const rootReducer = combineReducers<StateSchema>({
    login: loginSlice.reducer,
    user: userSlice.reducer,
});
