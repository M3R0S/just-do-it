import { combineReducers } from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";

import { counterSlice } from "entities/Counter";
// import { userSlice } from "entities/User";

export const rootReducer = combineReducers<StateSchema>({
    counter: counterSlice.reducer,
    // user: userSlice.reducer,
});
