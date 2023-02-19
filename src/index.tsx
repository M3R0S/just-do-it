import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";

import "shared/config/i18n/i18n";
// import ThemeProvider from "app/providers/Theme/ui/ThemeProvider";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { ErrorBoundary } from "shared/ui";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    // defaultProviderValue,
    ThemeContext,
} from "shared/lib/context/ThemeContext";
// import { ThemeProvider } from "app/providers/Theme";
import { useState } from "react";

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const [theme, setTheme] = useState<Theme>(defaultTheme);

render(
    <BrowserRouter>
        <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {/* <ThemeProvider> */}
                <App />
                {/* </ThemeProvider> */}
            </ThemeContext.Provider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
);
