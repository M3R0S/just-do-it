export type WebpackMode = "production" | "development";

export interface WebpackPath {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface WebpackEnv {
    MODE: WebpackMode | undefined;
    PORT: number | undefined;
}

export interface WebpackOptions {
    mode: WebpackMode;
    paths: WebpackPath;
    isDev: boolean;
    port: number;
}
