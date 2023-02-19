import { FC, Suspense } from "react";

import "./App.scss";
import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { useTheme } from "shared/lib/hooks";
import { cln } from "shared/lib/helpers";
import { ErrorBoundary, Loader } from "shared/ui";

export const App: FC = () => {
    // const { theme } = useTheme();

    return (
        <div className={cln("app", [theme])}>
            <Suspense fallback={<Loader className="app__loader" />}>
                <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
                    <Navbar />
                    <div className="app__content_page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </ErrorBoundary>
            </Suspense>
        </div>
    );
};
