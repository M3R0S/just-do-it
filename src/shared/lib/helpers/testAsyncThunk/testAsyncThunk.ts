import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import { ActionCreator, GetState } from "./testAsyncThunk.types";

jest.mock("axios");

export const testAsyncThunk = <Returned, Arg, RejectedValue>(
    actionCreator: ActionCreator<Returned, Arg, RejectedValue>
) => {
    const dispatch: Dispatch = jest.fn();
    const getState: GetState = jest.fn();
    const api = jest.mocked(axios);

    const callThunk = async (arg: Arg) => {
        const action = actionCreator(arg);
        const result = await action(dispatch, getState, { api });

        return result;
    };

    return { callThunk, dispatch, getState, actionCreator, api };
};
