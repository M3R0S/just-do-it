import { createSlice } from "@reduxjs/toolkit";

import { {{pascalCase}}Schema } from "../types/{{pascalCase}}Schema"

const initialState: {{pascalCase}}Schema = {
    
};

export const {{camelCase}}Slice = createSlice({
    name: "{{camelCase}}",
    initialState,
    reducers: {
        
    },
});

export const {{camelCase}}Actions = {{camelCase}}Slice.actions;
export const {{camelCase}}Reducer = {{camelCase}}.reducer;

