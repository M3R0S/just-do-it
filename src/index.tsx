import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "app/App.scss";
import { App } from "./app/App";

import { ThemeProvider } from "app/providers/Theme";
import { StoreProvider } from "app/providers/Store";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "shared/ui/ErrorBoundary";

render(
    <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
        <StoreProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </StoreProvider>
    </ErrorBoundary>,
    document.getElementById("root")
);
