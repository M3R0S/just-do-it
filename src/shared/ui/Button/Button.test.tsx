import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
    test("Render", () => {
        render(<Button text="TEST" />);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("Class in theme attrib", () => {
        render(
            <Button
                text="TEST"
                theme="clear"
            />
        );
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});
