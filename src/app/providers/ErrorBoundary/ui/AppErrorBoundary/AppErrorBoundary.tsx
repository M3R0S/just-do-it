import { FC } from "react";

import { AppErrorBoundaryProps } from "./AppErrorBoundary.types";

import { ErrorBoundary } from "shared/ui";
import { AppErrorFallback } from "../AppErrorFallback/AppErrorFallback";

export const AppErrorBoundary: FC<AppErrorBoundaryProps> = (props) => {
    const { children } = props;
    return (
        <ErrorBoundary fallback={<AppErrorFallback />}>
            {children}
        </ErrorBoundary>
    );
};
