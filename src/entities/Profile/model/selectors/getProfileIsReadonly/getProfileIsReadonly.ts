import { createSelector } from "@reduxjs/toolkit";

import { getProfile } from "../getProfile/getProfile";

export const getProfileIsReadonly = createSelector(
    getProfile,
    (profile) => profile?.isReadonly ?? true
);
