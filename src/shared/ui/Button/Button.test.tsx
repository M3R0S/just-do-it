import { render, screen } from "@testing-library/react";

import { Button } from "./Button";
import { ButtonTheme } from "./Button.types";

describe("Button", () => {
    test("Render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("Class in theme attrib", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});
