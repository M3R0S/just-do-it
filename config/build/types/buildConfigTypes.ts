export type BuildMode = "production" | "development"

export interface BuildPath {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildEnv {
    MODE: BuildMode
    PORT: number
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPath
    isDev: boolean
    port: number
}