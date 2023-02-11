import { FC } from "react";

import cl from "./Loader.module.scss";
import { LoaderProps } from "./Loader.types";

import LoaderSvg from "shared/assets/svg/Loader.svg";
import { cln } from "shared/lib/helpers";

export const Loader: FC<LoaderProps> = (props) => {
    const { className, theme = "standart" } = props;

    return (
        <div className={cln(cl.loader, [className, cl[theme]])}>
            <LoaderSvg className={cl.svg} />
        </div>
    );
};
