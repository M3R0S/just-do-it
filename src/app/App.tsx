import { FC, Suspense } from "react";

import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Main } from "widgets/Main";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { ErrorBoundary, Loader, LoaderTheme } from "shared/ui";

export const App: FC = () => {
    return (
        <div className="app">
            <Suspense fallback={<Loader theme={LoaderTheme.APP} />}>
                <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
                    <Navbar />
                    <Main>
                        <Sidebar />
                        <AppRouter />
                    </Main>
                </ErrorBoundary>
            </Suspense>
        </div>
    );
};
