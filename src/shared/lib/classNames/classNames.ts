import { ClassNames } from "./classNames.types";

const classNames: ClassNames = (cls = "", additional = [], mods = {}) => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, isInclude]) => Boolean(isInclude))
            .map(([className]) => className),
    ].join(" ");
};

export const cln = classNames;
