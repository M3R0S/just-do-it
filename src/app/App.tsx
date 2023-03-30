import { FC, memo, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import { AppRouter } from "./providers/Router";
import "./App.scss";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { getUserIsInited, userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Loader, LoaderTheme } from "shared/ui/Loader";
import { ErrorBoundary } from "shared/ui/ErrorBoundary";

export const App: FC = memo(() => {
    const dispatch = useAppDispatch();
    const isInited = useSelector(getUserIsInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
            <Suspense fallback={<Loader theme={LoaderTheme.APP} />}>
                <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
                    <Navbar />
                    <div className="content">
                        <Sidebar />
                        {isInited && <AppRouter />}
                    </div>
                </ErrorBoundary>
            </Suspense>
        </div>
    );
});
