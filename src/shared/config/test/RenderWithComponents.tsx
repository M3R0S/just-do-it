import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";

import { RenderWithComponentsOptions } from "./RenderWithComponents.types";

import i18nTestConfig from "shared/config/i18n/i18nForTest";
import { MemoryRouter } from "react-router-dom";

export const RenderWithComponents = (
    component: ReactNode,
    options: RenderWithComponentsOptions = {}
) => {
    const { route = "/" } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nTestConfig}>{component}</I18nextProvider>
        </MemoryRouter>
    );
};
