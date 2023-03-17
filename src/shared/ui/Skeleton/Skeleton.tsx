import { CSSProperties, FC, memo } from "react";

import cl from "./Skeleton.module.scss";
import { SkeletonProps } from "./Skeleton.types";

import { cln } from "shared/lib/helpers/classNames";

export const Skeleton: FC<SkeletonProps> = memo((props) => {
    const { className, borderRadius, height, width } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div
            className={cln(cl.skeleton, [className])}
            style={styles}
        />
    );
});
