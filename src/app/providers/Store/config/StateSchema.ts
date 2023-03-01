import { LoginSchema, loginSlice } from "features/AuthByUsername";

export interface StateSchema {
    [loginSlice.name]?: LoginSchema;
}
