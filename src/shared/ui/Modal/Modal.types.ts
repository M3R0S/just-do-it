import { ReactNode } from "react";

export interface ModalProps {
    onClose?: VoidFunction;
    isOpened?: boolean;
    className?: string;
    children?: ReactNode;
}
