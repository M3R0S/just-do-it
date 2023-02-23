import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "app/App.scss";
import { App } from "./app/App";

import "shared/config/i18n/i18n";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { ErrorBoundary } from "shared/ui";

render(
    <BrowserRouter>
        <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
            <App />
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
);
