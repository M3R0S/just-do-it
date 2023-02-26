import { counterActions, counterSlice } from "./counterSlice";
import { CounterSchema } from "../types/CounterSchema";

describe("counterSlice", () => {
    test("count decrement", () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterSlice.reducer(state, counterActions.decrement())).toEqual(
            {
                value: 9,
            }
        );
    });

    test("count increment", () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterSlice.reducer(state, counterActions.increment())).toEqual(
            {
                value: 11,
            }
        );
    });

    test("should work with empty state", () => {
        expect(
            counterSlice.reducer(undefined, counterActions.increment())
        ).toEqual({ value: 1 });
    });
});
