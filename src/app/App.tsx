import { FC, Suspense } from "react";

import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { ErrorBoundary, Loader } from "shared/ui";
import { cln } from "shared/lib/helpers";

export const App: FC = () => {

    return (
            <div className={cln("app")}>
                <Suspense fallback={<Loader className="app_loader" />}>
                    <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
                        <Navbar />
                        <div className="app_content_page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </ErrorBoundary>
                </Suspense>
            </div>
    );
};
