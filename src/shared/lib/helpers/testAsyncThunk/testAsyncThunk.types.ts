import { AsyncThunkAction } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/Store";

export type ActionCreator<Returned, Arg, RejectedValue> = (
    arg: Arg
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

export type GetState = () => StateSchema;
