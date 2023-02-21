import { fireEvent, screen } from "@testing-library/react";

import { Sidebar } from "./Sidebar";

import { RenderWithComponents } from "shared/config/test/RenderWithComponents";

describe("Sidebar", () => {
    test("Render", () => {
        RenderWithComponents(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Toggle", () => {
        RenderWithComponents(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
