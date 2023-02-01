type Mods = Record<string, boolean | string>;

export type ClassNames = (
    cls: string,
    additional?: string[],
    mods?: Mods
) => string;
