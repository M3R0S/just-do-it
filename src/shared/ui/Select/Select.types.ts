export interface SelectOptions<V = string> {
    value: V;
    content: string;
}

export interface SelectProps<V> {
    className?: string;
    label?: string;
    options?: SelectOptions<V>[];
    value?: V;
    onChangeValue?: (value: V) => void;
    isReadonly?: boolean;
}
