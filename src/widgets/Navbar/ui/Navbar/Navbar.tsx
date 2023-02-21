import { FC } from "react";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { cln } from "shared/lib/helpers";
import { ButtonError } from "shared/ui/ErrorBoundary/ButtonError";

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <header className={cln(cl.navbar, [className])}>
            <div className={cl.links}>
                <ButtonError />
            </div>
        </header>
    );
};
