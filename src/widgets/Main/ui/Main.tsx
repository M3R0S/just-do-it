import { FC } from "react";

import cl from "./Main.module.scss";
import { MainProps } from "./Main.types";

import { cln } from "shared/lib/helpers/classNames";

export const Main: FC<MainProps> = (props) => {
    const { className, children } = props;

    return <div className={cln(cl.main, [className])}>{children}</div>;
};
