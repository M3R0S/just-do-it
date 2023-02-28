import { CounterSchema, counterSlice } from "entities/Counter";
import {
    UserSchema,
    //  userSlice
} from "entities/User";

export interface StateSchema {
    [counterSlice.name]: CounterSchema;
    // [userSlice.name]: UserSchema;
}
