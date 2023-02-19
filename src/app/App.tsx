import { FC, Suspense, useMemo, useState } from "react";

import "./App.scss";
import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
import { cln } from "shared/lib/helpers";
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

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
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
        </ThemeContext.Provider>
    );
};
