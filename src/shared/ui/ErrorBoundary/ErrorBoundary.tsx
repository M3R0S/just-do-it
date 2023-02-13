import { Component, ErrorInfo } from "react";

import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types";

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // todo used error
    //  eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { fallback, children } = this.props;

        if (hasError) {
            return fallback;
        }

        return children;
    }
}
