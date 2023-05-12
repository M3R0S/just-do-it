import { ReactNode } from "react";

export type DropdownDirection = "top" | "bottom"

export interface ListBoxOption<V> {
    value: V;
    content: ReactNode;
    disabled?: boolean
}

export interface ListBoxProps<V> {
    className?: string;
    options?: ListBoxOption<V>[];
    value?: V
    label?: string
    defaultValue: string
    onChangeValue: (value: V) => void
    isReadonly?: boolean
    direction?: DropdownDirection
}
