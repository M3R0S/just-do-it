import { FC } from "react";

import cl from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";

import { cln } from "shared/lib/helpers";
import { useMounted, useKeyDown } from "shared/lib/hooks";
import { Overlay, Portal } from "shared/ui";

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpened, onClose } = props;

    const { isMounted, handleAnimationEnd } = useMounted({
        isActive: isOpened,
    });

    useKeyDown({ action: onClose });

    const mods: Record<string, boolean> = {
        [cl.content_opened]: isOpened,
        [cl.content_closed]: !isOpened,
    };

    if (!isMounted) {
        return null;
    }

    return (
        <Portal className={cl.portal}>
            <Overlay
                onClose={onClose}
                isActive={isOpened}
            />
            <div
                onAnimationEnd={handleAnimationEnd("content-closed")}
                className={cln(cl.content, [className], mods)}
            >
                {children}
            </div>
        </Portal>
    );
};
