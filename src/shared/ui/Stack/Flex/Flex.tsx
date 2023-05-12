import { FC } from "react";

import cl from "./Flex.module.scss";
import { FlexProps } from "./Flex.types";

import { Mods, cln } from "shared/lib/helpers/classNames";

export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        Tag = "div",
        children,
        direction,
        alignItems = "normal",
        justifyContent = "normal",
        rowGap,
        columnGap,
        gap,
        max,
        wrap = "nowrap",
    } = props;

    const classes = [
        className,
        cl[`justify_content_${justifyContent}`],
        cl[`align_items_${alignItems}`],
        cl[`direction_${direction}`],
        cl[`wrap_${wrap}`],
    ];

    const mods: Mods = {
        [cl[`gap_${gap}`]]: Boolean(gap),
        [cl.max]: max,
        [cl[`gap_row_${rowGap}`]]: Boolean(rowGap),
        [cl[`gap_column_${columnGap}`]]: Boolean(columnGap),
    };

    return <Tag className={cln(cl.flex, classes, mods)}>{children}</Tag>;
};
