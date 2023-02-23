import { ReactNode } from "react";

export interface ModalProps {
    isOpened: boolean;
    onClose: VoidFunction;
    className?: string;
    children?: ReactNode;
}
