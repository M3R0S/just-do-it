import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Modal } from "./Modal";

import { RenderWithComponent } from "shared/config/test/RenderWithComponent";

describe("Modal", () => {
    test("open modal", () => {
        RenderWithComponent(
            <Modal
                isOpened={true}
                onClose={() => ({})}
            />
        );
        expect(screen.getByTestId("content")).toBeInTheDocument();
    });

    test("closed modal with escape", () => {
        const isOpened = true;
        RenderWithComponent(
            <Modal
                isOpened={isOpened}
                onClose={() => ({})}
            />
        );
        const content = screen.getByTestId("content");
        userEvent.keyboard("[Escape]");
        expect(content).not.toBeInTheDocument;
    });
});
