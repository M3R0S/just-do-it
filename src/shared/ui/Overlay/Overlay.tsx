import { FC, memo } from "react";

import cl from "./Overlay.module.scss";
import { OverlayProps } from "./Overlay.types";

import { cln, Mods } from "shared/lib/helpers/classNames";
import { useMounted } from "shared/lib/hooks/useMounted";

export const Overlay: FC<OverlayProps> = memo((props) => {
    const { className, isActive, onClose } = props;

    const { handleAnimationEnd } = useMounted({
        isActive,
    });

    const mods: Mods = {
        [cl.overlay_opened]: isActive,
        [cl.overlay_closed]: !isActive,
    };

    return (
        <div
            role="button"
            data-testid="overlay"
            onClick={onClose}
            onAnimationEnd={handleAnimationEnd("overlay-closed")}
            className={cln(cl.overlay, [className], mods)}
        />
    );
});
