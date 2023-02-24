import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { PortalProps } from "./Portal.types";
import cl from "./Portal.module.scss";

export const Portal: FC<PortalProps> = (props) => {
    const { children, className, htmlElement = document.body } = props;

    const createElement = () => document.createElement("div");
    const [container] = useState<HTMLElement>(createElement);

    useEffect(() => {
        htmlElement?.appendChild(container);
        container.classList.add(cl.portal);

        if (className) {
            container.classList.add(className);
        }

        return () => {
            htmlElement?.removeChild(container);
        };
    }, [className, container, htmlElement]);

    return createPortal(children, container);
};
