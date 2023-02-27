import { createSlice } from "@reduxjs/toolkit";

import { AuthByUsernameSchema } from "../types/AuthByUsernameSchema"

const initialState: AuthByUsernameSchema = {
    
};

export const authByUsernameSlice = createSlice({
    name: "authByUsername",
    initialState,
    reducers: {
        
    },
});

export const authByUsernameActions = authByUsernameSlice.actions;
