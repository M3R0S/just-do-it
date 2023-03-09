import axios from "axios";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("{{camelCase}}", () => {
    test("___", () => {
        expect(true).toBe(true)
    })
});
