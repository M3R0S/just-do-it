import { FC } from "react";

import "./styles/index.scss";
import { useTheme } from "./providers/Theme";
import { AppRouter } from "./providers/Router";
import { cln } from "shared/lib";
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
