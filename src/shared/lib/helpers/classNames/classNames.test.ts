import { cln } from "./classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(cln("mainClasses")).toBe("mainClasses");
    });

    test("with additional classes", () => {
        const expected =
            "mainClasses firstAdditionalClass secondAdditionalClass";

        expect(
            cln("mainClasses", [
                "firstAdditionalClass",
                "secondAdditionalClass",
            ])
        ).toBe(expected);
    });

    test("with mods classes true", () => {
        const expected =
            "mainClasses firstAdditionalClass secondAdditionalClass firstModsClass secondModsClass";

        expect(
            cln(
                "mainClasses",
                ["firstAdditionalClass", "secondAdditionalClass"],
                { firstModsClass: true, secondModsClass: true }
            )
        ).toBe(expected);
    });

    test("with mods classes false", () => {
        const expected =
            "mainClasses firstAdditionalClass secondAdditionalClass";

        expect(
            cln(
                "mainClasses",
                ["firstAdditionalClass", "secondAdditionalClass"],
                { firstModsClass: false, secondModsClass: false }
            )
        ).toBe(expected);
    });

    test("with mods classes true and false", () => {
        const expected =
            "mainClasses firstAdditionalClass secondAdditionalClass firstModsClass";

        expect(
            cln(
                "mainClasses",
                ["firstAdditionalClass", "secondAdditionalClass"],
                { firstModsClass: true, secondModsClass: false }
            )
        ).toBe(expected);
    });
});
