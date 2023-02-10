import { Config } from "jest";

import { jestConfig } from "./config/jest";

const config = async (): Promise<Config> => {
    return jestConfig();
};

export default config;
