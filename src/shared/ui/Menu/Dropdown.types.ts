import { ReactNode } from "react";

import { DropdownDirection } from "shared/lib/types/ui";

export interface DropdownItem {
    isDisabled?: boolean;
    content: ReactNode;
    onClick?: VoidFunction;
    href?: string;
}

export interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}
