import { ValueOf } from "./helpersTypes";

export const ServerEndpoints = {
    PROFILE: "/profile",
    LOGIN: "/login",
} as const;

export const StatusCodes = {
    NOT_AUTHORIZED: "403",
    NO_DATA: "404",
    UNKNOWN: "500",
};

export type ServerEndpoints = ValueOf<typeof ServerEndpoints>;
export type StatusCodes = ValueOf<typeof StatusCodes>;
