import { FC } from "react";

import "./App.scss";
import { AppRouter } from "./providers/Router";

import { Navbar } from "widgets/Navbar";
import { useTheme } from "shared/lib/hooks";
import { cln } from "shared/lib";

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={cln("app", [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};
