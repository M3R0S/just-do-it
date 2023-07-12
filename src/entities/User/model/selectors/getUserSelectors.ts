import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/Store";

export const getUser = (state: StateSchema) => state.user;

export const getUserAuthData = createSelector(getUser, (user) => user.authData);
export const getUserIsInited = createSelector(getUser, (user) => user._isInited);
export const getUserRoles = createSelector(getUserAuthData, (authData) => authData?.roles);

export const getIsUserAdmin = createSelector(getUserRoles, (roles) => roles?.includes("ADMIN"));
export const getIsUserManager = createSelector(getUserRoles, (roles) => roles?.includes("MANAGER"));
