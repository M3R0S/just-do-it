type Mods = Record<string, boolean>;

export type ClassNames = (cls: string, additional?: (string | undefined)[], mods?: Mods) => string;
