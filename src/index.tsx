import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";

import "shared/config/i18n/i18n";
// import ThemeProvider from "app/providers/Theme/ui/ThemeProvider";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { ErrorBoundary } from "shared/ui";
import { ThemeContext } from "shared/lib/context/ThemeContext";

render(
    <BrowserRouter>
        <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
            {/* <ThemeProvider> */}
            <ThemeContext.Provider value="value">
                <App />
            </ThemeContext.Provider>
            {/* </ThemeProvider> */}
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
);
