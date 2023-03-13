import { FC, memo } from "react";

import cl from "./Avatar.module.scss";
import { AvatarProps } from "./Avatar.types";

import { cln } from "shared/lib/helpers/classNames";

export const Avatar: FC<AvatarProps> = memo((props) => {
    const { className, src, height = 100, width = 100, alt = "avatar" } = props;

    return (
        <img
            src={src}
            width={width}
            height={height}
            className={cln(cl.avatar, [className])}
            alt={alt}
        />
    );
});
