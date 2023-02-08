import { ValueOf } from "shared/lib/types";

export const Lang = {
    RU: "ru",
    EN: "en",
} as const;

export type Lang = ValueOf<typeof Lang>;
