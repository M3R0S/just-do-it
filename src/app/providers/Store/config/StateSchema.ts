import { CounterSchema, counterSlice } from "entities/Counter";

export interface StateSchema {
    [counterSlice.name]: CounterSchema;
}
