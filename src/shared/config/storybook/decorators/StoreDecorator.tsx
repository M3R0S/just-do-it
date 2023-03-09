import { DeepPartial } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";

import { StateSchema, StoreProvider, StoreProviderAsyncReducers } from "app/providers/Store";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";

export const defaultAsyncReducers: StoreProviderAsyncReducers = {
    login: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>, asyncReducers?: StoreProviderAsyncReducers) =>
    (Story: Story) =>
        (
            <StoreProvider
                initialState={initialState}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
