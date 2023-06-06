import { ReactNode } from "react";

import { DropdownDirection } from "shared/lib/types/ui";

export interface ListBoxOption<V> {
    value: V;
    content: ReactNode;
    disabled?: boolean;
}

export interface ListBoxProps<V> {
    className?: string;
    options?: ListBoxOption<V>[];
    value?: V;
    label?: string;
    defaultValue: string;
    onChangeValue: (value: V) => void;
    isReadonly?: boolean;
    direction?: DropdownDirection;
}
