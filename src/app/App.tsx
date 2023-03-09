import { FC, Suspense, useEffect } from "react";

import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Main } from "widgets/Main";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Loader, LoaderTheme } from "shared/ui/Loader";
import { ErrorBoundary } from "shared/ui/ErrorBoundary";

export const App: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
