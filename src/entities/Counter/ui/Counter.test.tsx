import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Counter } from "./Counter";

import { RenderWithComponent } from "shared/config/test/RenderWithComponent";

describe("Counter", () => {
    test("Render", () => {
        RenderWithComponent(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId("counter")).toBeInTheDocument();
    });
    test("correct value", () => {
        RenderWithComponent(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });
    test("increment", () => {
        RenderWithComponent(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        userEvent.click(screen.getByTestId("increment-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
    test("decrement", () => {
        RenderWithComponent(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        userEvent.click(screen.getByTestId("decrement-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
});
