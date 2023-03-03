import { LoginSchema, loginSlice } from "features/AuthByUsername";
import { UserSchema } from "entities/User";

export interface StateSchema {
    [loginSlice.name]?: LoginSchema;
    user: UserSchema;
}
