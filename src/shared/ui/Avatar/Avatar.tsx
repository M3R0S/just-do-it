import { FC, memo } from "react";

import cl from "./Avatar.module.scss";
import { AvatarProps } from "./Avatar.types";

import { cln } from "shared/lib/helpers/classNames";

export const Avatar: FC<AvatarProps> = memo((props) => {
    const {
        className,
        src = "https://www.pngfind.com/pngs/m/341-3416003_no-avatar-pic-unknown-person-png-transparent-png.png",
        height = 100,
        width = 100,
        alt = "avatar",
    } = props;

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
