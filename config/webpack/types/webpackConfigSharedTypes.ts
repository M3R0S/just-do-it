export type WebpackMode = "production" | "development";

export interface WebpackPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface WebpackEnv {
    MODE: WebpackMode | undefined;
    PORT: number | undefined;
    ANALYZE: boolean | undefined;
    API_URL: string | undefined;
}

export type WebpackProject = "storybook" | "frontend" | "jest";

export interface WebpackOptions {
    mode: WebpackMode;
    paths: WebpackPaths;
    isDev: boolean;
    port: number;
    isAnalize: boolean;
    apiUrl: string;
    project: WebpackProject;
}
