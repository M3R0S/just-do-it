import { ValueOf } from "../../../../shared/lib/types/helpersTypes";

export const Currency = {
    RUB: "RUB",
    EUR: "EUR",
    USD: "USD",
} as const;

export type Currency = ValueOf<typeof Currency>;
