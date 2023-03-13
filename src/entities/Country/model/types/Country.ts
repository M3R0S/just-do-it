import { ValueOf } from "shared/lib/types/helpersTypes";

export const Country = {
    RUSSIA: "Russia",
    BELARUS: "Belarus",
    UKRAINE: "Ukarine",
} as const;

export type Country = ValueOf<typeof Country>;
