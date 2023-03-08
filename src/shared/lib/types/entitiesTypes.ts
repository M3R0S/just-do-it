import { ValueOf } from "./helpersTypes";

export const Currency = {
    RUB: "RUB",
    EUR: "EUR",
    USD: "USD",
} as const;

export const Country = {
    RUSSIA: "Russia",
    BELARUS: "Belarus",
    UKRAINE: "Ukarine",
} as const;

export type Currency = ValueOf<typeof Currency>;
export type Country = ValueOf<typeof Country>;
