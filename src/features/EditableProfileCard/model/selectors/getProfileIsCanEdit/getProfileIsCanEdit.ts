import { createSelector } from "@reduxjs/toolkit";

import { getProfileData } from "../getProfileData/getProfileData";

import { getUserAuthData } from "entities/User";

export const getProfileIsCanEdit = createSelector(
    getUserAuthData,
    getProfileData,
    (authData, profileData) => authData?.id === profileData?.id
);
