import { FC, Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import { useTheme } from "./providers/Theme";
import { MainPage } from "pages/Main";
import { AboutPage } from "pages/About";
import { cln } from "shared/lib";

export const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cln("app", [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to="/">Main</Link> <Link to="/about">About</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
