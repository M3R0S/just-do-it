import { ClassNames } from "./classNames.types";

const classNames: ClassNames = (cls, additional = [], mods = {}) => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods).map(([className, isInclude]) => {
            if (isInclude) {
                return className;
            }
        }),
    ].join(" ");
};

export const cln = classNames;
