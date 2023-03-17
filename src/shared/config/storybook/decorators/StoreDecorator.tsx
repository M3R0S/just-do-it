import { Story } from "@storybook/react";

import { StateSchema, StoreProvider } from "app/providers/Store";
import { loginReducer } from "features/AuthByUsername";
import { profileReducer } from "features/EditableProfileCard";
import { articleDetailsReducer } from "entities/Article";
import { ReducersList } from "shared/lib/hooks/useDynamicReducerLoader";

export const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: Story) =>
        (
            <StoreProvider
                initialState={initialState}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
