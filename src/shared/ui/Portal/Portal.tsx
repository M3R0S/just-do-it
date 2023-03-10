import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import cl from "./Portal.module.scss";
import { PortalProps } from "./Portal.types";

import { useTheme } from "shared/lib/hooks/useTheme";

export const Portal: FC<PortalProps> = (props) => {
    const { children, className, htmlElement = document.body } = props;

    const { theme } = useTheme();

    const createElement = () => document.createElement("div");
    const [container] = useState<HTMLElement>(createElement);

    useEffect(() => {
        htmlElement.appendChild(container);
        container.classList.add(cl.portal);
        container.classList.add(theme);

        if (className) {
            container.classList.add(className);
        }

        return () => {
            htmlElement.removeChild(container);
        };
    }, [className, container, htmlElement, theme]);

    return createPortal(children, container);
};
