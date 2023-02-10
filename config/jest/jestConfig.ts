import { JestConfig } from "./jestConfig.types";

export const jestConfig: JestConfig = () => {
    return {
        clearMocks: true,
        testEnvironment: "jsdom",
        coveragePathIgnorePatterns: ["node_modules", ".vscode"],
        moduleDirectories: ["node_modules"],
        moduleFileExtensions: [
            "js",
            "mjs",
            "cjs",
            "jsx",
            "ts",
            "tsx",
            "json",
            "node",
        ],
        testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
    };
};
