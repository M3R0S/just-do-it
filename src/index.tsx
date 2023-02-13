import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";
import "shared/config/i18n";
import { ThemeProvider } from "app/providers/Theme";
import { AppErrorBoundary } from "app/providers/ErrorBoundary";

render(
    <BrowserRouter>
        <ThemeProvider>
            <AppErrorBoundary>
                <App />
            </AppErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
