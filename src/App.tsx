import { FC, Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import { AboutPageLazy, MainPageLazy } from "./pages";
import { useTheme } from "./theme";
import { cln } from "./helpers";

export type Theme = "light" | "dark";

export const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cln("app", [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to="/">Main</Link> <Link to="/about">About</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy />} />
                    <Route path="/about" element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};
