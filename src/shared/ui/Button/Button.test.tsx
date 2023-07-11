import { render, screen } from "@testing-library/react";

import { Button } from "./";

describe("Button", () => {
    test("Render", () => {
        render(<Button>test</Button>);
        expect(screen.getByText("test")).toBeInTheDocument();
    });

    test("Class in theme attrib", () => {
        render(
            <Button
                theme="clear"
            >test</Button>
        );
        expect(screen.getByText("test")).toHaveClass("clear");
    });
});
