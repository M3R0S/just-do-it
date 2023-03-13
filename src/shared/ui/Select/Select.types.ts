export interface SelectOptions {
    value: string;
    content: string;
}

export interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChangeValue?: (value: string) => void;
    isReadonly?: boolean;
}
