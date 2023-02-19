import { FC, Suspense, useState } from "react";

import "./App.scss";
import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppErrorBoundaryFallback } from "widgets/AppErrorBoundaryFallback";
// import { useTheme } from "shared/lib/hooks";
import { cln } from "shared/lib/helpers";
import { ErrorBoundary, Loader } from "shared/ui";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "shared/lib/context/ThemeContext";
//@ts-ignore
import ThemeProvider from "../app/providers/Theme/ui/ThemeProvider.tsx";

export const App: FC = () => {
    // const { theme } = useTheme();

    // const defaultTheme =
    //     (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

    // const [theme, setTheme] = useState<Theme>(defaultTheme);

    return (
        // <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider>
            <div className={cln("app", ["light"])}>
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
        </ThemeProvider>
        // </ThemeContext.Provider>
    );
};
