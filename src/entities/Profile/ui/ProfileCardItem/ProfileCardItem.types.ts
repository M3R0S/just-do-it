import { HTMLInputTypeAttribute } from "react";

export interface ProfileCardItemProps {
    className?: string;
    placeholder?: string;
    value?: string;
    onChangeValue?: (value: string) => void;
    isReadonly?: boolean;
    type?: HTMLInputTypeAttribute;
}
