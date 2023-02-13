import { FC, Suspense } from "react";

import "./styles/app.scss";
import { AppRouter } from "./providers/Router";
import { AppErrorBoundary } from "./providers/ErrorBoundary";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTheme } from "shared/lib/hooks";
import { cln } from "shared/lib/helpers";
import { Loader } from "shared/ui";

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={cln("app", [theme])}>
            <Suspense fallback={<Loader className="app__loader" />}>
                <AppErrorBoundary>
                    <Navbar />
                    <div className="app__content_page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </AppErrorBoundary>
            </Suspense>
        </div>
    );
};
