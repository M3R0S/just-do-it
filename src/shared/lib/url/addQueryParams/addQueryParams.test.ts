import { getQueryParams } from "./addQueryParams";

describe("addQueryParams", () => {
    test("test one params", () => {
        const params = getQueryParams({
            test: "value",
        });

        expect(params).toEqual("?test=value");
    });

    test("test multi params", () => {
        const params = getQueryParams({
            test: "value",
            total: "2",
        });

        expect(params).toEqual("?test=value&total=2");
    });

    test("test undefined params", () => {
        const params = getQueryParams({
            test: "value",
            total: undefined,
        });

        expect(params).toEqual("?test=value");
    });
});
