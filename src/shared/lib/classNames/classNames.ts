import { ClassNames } from ".";

export const classNames: ClassNames = (cls, additional = [], mods = {}) => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods).map(([className, isInclude]) => {
            if (isInclude) {
                return className;
            }
        }),
    ].join(" ");
}
