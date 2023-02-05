import { FC } from "react";

import "./styles/index.scss";
import { useTheme } from "shared/lib/hooks/useTheme";
import { AppRouter } from "./providers/Router";
import { cln } from "shared/lib/classNames";
import { Navbar } from "widgets/Navbar";

export const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cln("app", [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Theme</button>
            <AppRouter />
        </div>
    );
};
