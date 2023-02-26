import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../models/slice/counterSlice";
import { getCounterValue } from "../models/selectors";

import { Button } from "shared/ui";

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="counter">
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                increment
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};
