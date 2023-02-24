import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "app/App.scss";
import { App } from "./app/App";

import { ThemeProvider } from "app/providers/Theme";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "shared/ui";

render(
    <BrowserRouter>
        <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
);
