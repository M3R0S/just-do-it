import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { RenderWithComponentOptions } from "./RenderWithComponent.types";
import i18nTestConfig from "../i18n/i18nForTest";

import { StateSchema, StoreProvider } from "app/providers/Store";

export const RenderWithComponent = (
    component: ReactNode,
    options: RenderWithComponentOptions = {}
) => {
    const { route = "/", initialState, asyncReducers } = options;

    return render(
        <StoreProvider
            asyncReducers={asyncReducers}
            initialState={initialState as StateSchema}
        >
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nTestConfig}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};
