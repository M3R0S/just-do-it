import { FC } from "react";

import "./App.scss";
import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { useTheme } from "shared/lib/hooks";
import { cln } from "shared/lib";
import { Sidebar } from "widgets/Sidebar";

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={cln("app", [theme])}>
            <Navbar />
            <div className="content_page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
