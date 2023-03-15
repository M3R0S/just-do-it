import { createSelector } from "@reduxjs/toolkit";

import { getUser } from "../getUser/getUser";

export const getUserIsInited = createSelector(getUser, (user) => user._isInited);
