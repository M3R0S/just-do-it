import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { RenderWithComponentOptions } from "./RenderWithComponent.types";

import { StateSchema, StoreProvider } from "app/providers/Store";
import i18nTestConfig from "shared/config/i18n/i18nForTest";

export const RenderWithComponent = (component: ReactNode, options: RenderWithComponentOptions = {}) => {
    const { route = "/", initialState } = options;

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nTestConfig}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};
