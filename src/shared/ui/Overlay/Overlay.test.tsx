import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

    // test("closed overlay with btn", () => {
    //     RenderWithComponent(
    //         <Overlay
    //             isActive={true}
    //             onClose={() => ({})}
    //         />
    //     );
    //     const overlay = screen.getByTestId("overlay");
    //     userEvent.click(overlay);
    //     expect(overlay).not.toBeInTheDocument();
    // });
});
