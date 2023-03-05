import { Dispatch } from "@reduxjs/toolkit";

import { ActionCreator, GetState } from "./testAsyncThunk.types";

export const testAsyncThunk = <Returned, Arg, RejectedValue>(
    actionCreator: ActionCreator<Returned, Arg, RejectedValue>
) => {
    const dispatch: Dispatch = jest.fn();
    const getState: GetState = jest.fn();

    const callThunk = async (arg: Arg) => {
        const action = actionCreator(arg);
        const result = await action(dispatch, getState, undefined);

        return result;
    };

    return { callThunk, dispatch, getState, actionCreator };
};
