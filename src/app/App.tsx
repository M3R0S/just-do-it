import { FC, Suspense, useEffect, useMemo, useState } from "react";

import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { ErrorBoundary, Loader } from "shared/ui";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "shared/lib/context/ThemeContext";

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const App: FC = () => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    useEffect(() => {
        document.body.classList.add(theme);

        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            <Suspense fallback={<Loader className="root_loader" />}>
                <ErrorBoundary fallback={<AppErrorBoundaryFallback />}>
                    <Navbar />
                    <div className="root_content_page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </ErrorBoundary>
            </Suspense>
        </ThemeContext.Provider>
    );
};
