import { fireEvent, screen } from "@testing-library/react";

import { Sidebar } from "./Sidebar";

import { RenderWithComponent } from "shared/config/test/RenderWithComponent";

describe("Sidebar", () => {
    test("Render", () => {
        RenderWithComponent(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Toggle", () => {
        RenderWithComponent(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
