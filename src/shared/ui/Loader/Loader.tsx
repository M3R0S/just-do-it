import { FC } from "react";

import cl from "./Loader.module.scss";
import { LoaderProps, LoaderTheme } from "./Loader.types";

import { LoaderSvg } from "shared/assets/svg";
import { cln } from "shared/lib/helpers";

export const Loader: FC<LoaderProps> = (props) => {
    const { className, theme = LoaderTheme.STANDART } = props;

    return (
        <div className={cln(cl.loader, [className, cl[theme]])}>
            <LoaderSvg className={cl.svg} />
        </div>
    );
};
