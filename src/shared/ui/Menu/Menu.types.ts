import { ReactNode } from "react";

export interface MenuItem {
    isDisabled?: boolean
    content?: ReactNode
    onClick: VoidFunction
    href: string
}

export interface MenuProps {
    className?: string;
    items: MenuItem[];
    trigger: ReactNode;
}
