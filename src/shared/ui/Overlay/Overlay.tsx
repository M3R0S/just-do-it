import { FC } from "react";

import cl from "./Overlay.module.scss";
import { OverlayProps } from "./Overlay.types";

import { cln } from "shared/lib/helpers";
import { useMounted } from "shared/lib/hooks";

export const Overlay: FC<OverlayProps> = (props) => {
    const { className, isActive, onClose } = props;

    const { handleAnimationEnd } = useMounted({
        isActive,
    });

    const mods: Record<string, boolean> = {
        [cl.overlay_opened]: isActive,
        [cl.overlay_closed]: !isActive,
    };

    return (
        <div
            role="button"
            onClick={onClose}
            onAnimationEnd={handleAnimationEnd("overlay-closed")}
            className={cln(cl.overlay, [className], mods)}
        />
    );
};
