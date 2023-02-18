import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";

import "shared/config/i18n/i18n";
import { ThemeProvider } from  "../src/app/providers/Theme"
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { ErrorBoundary } from "shared/ui";

render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
