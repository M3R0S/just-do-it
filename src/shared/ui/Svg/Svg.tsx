import { FC, memo } from "react";

import cl from "./Svg.module.scss";
import { SvgProps } from "./Svg.types";

import { cln } from "shared/lib/helpers/classNames";

export const Svg: FC<SvgProps> = memo((props) => {
    const { className, Svg } = props;

    return <Svg className={cln(cl.svg, [className])} />;
});
