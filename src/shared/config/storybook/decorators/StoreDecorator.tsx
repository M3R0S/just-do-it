import { DeepPartial } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";

import { StateSchema, StoreProvider } from "app/providers/Store";

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (Story: Story) =>
    (
        <StoreProvider initialState={initialState}>
            <Story />
        </StoreProvider>
    );
