import path from "path";

import { JestConfig } from "./jestConfig.types";

export const jestConfig: JestConfig = () => {
    return {
        clearMocks: true,
        testEnvironment: "jsdom",
        coveragePathIgnorePatterns: ["node_modules", ".vscode"],
        moduleDirectories: ["node_modules"],
        moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],
        testMatch: ["<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)"],
        modulePaths: ["<rootDir>/src"],
        setupFilesAfterEnv: ["<rootDir>/config/jest/jestSetup.ts"],
        moduleNameMapper: {
            "\\.s?css$": "identity-obj-proxy",
            "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
        },
        globals: {
            __IS_DEV__: true,
            __API__: "",
            __PROJECT__: "jest",
        },
        reporters: [
            "default",
            ["jest-html-reporters", {
              publicPath: "<rootDir>/reports/unit",
              filename: "report.html",
            //   openReport: true,
              inlineSource: true,
            }]
          ]
    };
};
