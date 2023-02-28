import { screen } from "@testing-library/react";

import { Overlay } from "./Overlay";

import { RenderWithComponent } from "shared/config/test/RenderWithComponent";

describe("Overlay", () => {
    test("open overlay", () => {
        RenderWithComponent(
            <Overlay
                isActive={true}
                onClose={() => ({})}
            />
        );
        const overlay = screen.getByTestId("overlay");
        expect(overlay).toBeInTheDocument();
    });
});
