import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import { ActionCreator, GetState } from "./testAsyncThunk.types";

import { StateSchema } from "app/providers/Store";

jest.mock("axios");

export const testAsyncThunk = <Returned, Arg, RejectedValue>(
    actionCreator: ActionCreator<Returned, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>
) => {
    const dispatch: Dispatch = jest.fn();
    const getState: GetState = jest.fn(() => state as StateSchema);
    const api = jest.mocked(axios);

    const callThunk = async (arg: Arg) => {
        const action = actionCreator(arg);
        const result = await action(dispatch, getState, { api });

        return result;
    };

    return { callThunk, dispatch, getState, actionCreator, api };
};
