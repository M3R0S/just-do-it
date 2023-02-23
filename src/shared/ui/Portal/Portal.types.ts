import { ReactNode } from "react";

export interface PortalProps {
    children: ReactNode;
    className?: string;
    htmlElement?: HTMLElement;
}
