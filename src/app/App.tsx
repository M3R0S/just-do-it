import { FC, memo, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import { AppRouter } from "./providers/Router";
import "./App.scss";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { getUserIsInited, userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Loader } from "shared/ui/Loader";
import { ErrorBoundary } from "shared/ui/ErrorBoundary";
import { HStack } from "shared/ui/Stack";

export const App: FC = memo(() => {
    const dispatch = useAppDispatch();
    const isInited = useSelector(getUserIsInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <Suspense fallback={<Loader theme="app" />}>
            <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
                <Navbar />
                <HStack>
                    <Sidebar />
                    {isInited && <AppRouter />}
                </HStack>
            </ErrorBoundary>
        </Suspense>
    );
});
