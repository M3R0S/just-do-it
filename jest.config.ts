import { Config } from "jest";

import { jestConfig } from "./config/jest/jestConfig";

const config = async (): Promise<Config> => {
    return jestConfig();
};

export default config;
