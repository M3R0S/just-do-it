import { FC } from "react";

import cl from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";
import { Portal } from "../Portal";
import { Overlay } from "../Overlay";

import { cln } from "shared/lib/helpers/classNames";
import { useMounted } from "shared/lib/hooks/useMounted";
import { useKeyDown } from "shared/lib/hooks/useKeyDown";

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

    if (!isOpened && !isMounted) {
        return null;
    }

    return (
        <Portal className={cl.portal}>
            <Overlay
                onClose={onClose}
                isActive={isOpened}
            />
            <div
                data-testid="content"
                onAnimationEnd={handleAnimationEnd("content-closed")}
                className={cln(cl.content, [className], mods)}
            >
                {children}
            </div>
        </Portal>
    );
};
