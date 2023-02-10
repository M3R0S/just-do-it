import { FC, Suspense } from "react";

import "./styles/app.scss";
import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { useTheme } from "shared/lib/hooks";
import { cln } from "shared/lib";
import { Sidebar } from "widgets/Sidebar";

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={cln("app", [theme])}>
            <Suspense fallback="Перевод загружается...">
                <Navbar />

                <div className="content_page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
