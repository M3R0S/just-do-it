import { screen, waitFor } from "@testing-library/react";

import { Modal } from "./Modal";

import { RenderWithComponent } from "shared/config/test/RenderWithComponent";

describe("Modal", () => {
    test("Render", () => {
        RenderWithComponent(
            <Modal
                isOpened={true}
                onClose={() => ({})}
            />
        );
        // waitFor(
        //     () => {
        //         expect(screen.getByTestId("modal")).toBeInTheDocument();
        //     },
        //     {
        //         timeout: 400,
        //     }
        // );
    });
});
