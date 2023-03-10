export type Mods = Record<string, boolean | undefined>;

export type ClassNames = (cls: string, additional?: (string | undefined)[], mods?: Mods) => string;
