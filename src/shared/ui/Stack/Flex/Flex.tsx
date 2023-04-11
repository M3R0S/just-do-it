import { FC } from "react";

import cl from "./Flex.module.scss";
import { FlexProps } from "./Flex.types";

import { Mods, cln } from "shared/lib/helpers/classNames";

export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        children,
        direction,
        alignItems = "start",
        justifyContent = "start",
        rowGap,
        columnGap,
        gap,
    } = props;

    const classes = [
        className,
        cl[`justify_content_${justifyContent}`],
        cl[`align_items_${alignItems}`],
        cl[`direction_${direction}`],
    ];

    const mods: Mods = {
        [cl[`gap_${gap}`]]: Boolean(gap),
        [cl[`gap_row_${rowGap}`]]: Boolean(rowGap),
        [cl[`gap_column_${columnGap}`]]: Boolean(columnGap),
    };

    return <div className={cln(cl.flex, classes, mods)}>{children}</div>;
};
