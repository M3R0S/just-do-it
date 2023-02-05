import { FC } from "react";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";
import { cln } from "shared/lib";
import { Link } from "react-router-dom";

export const Navbar: FC<NavbarProps> = (props) => {
    const { className = "" } = props;

    return (
        <header className={cln(cl.navbar, [className])}>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
        </header>
    );
};
