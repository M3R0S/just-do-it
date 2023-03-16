import { FC, memo, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Main } from "widgets/Main";
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
                    <Main>
                        <Sidebar />
                        {isInited && <AppRouter />}
                    </Main>
                </ErrorBoundary>
            </Suspense>
        </div>
    );
});
